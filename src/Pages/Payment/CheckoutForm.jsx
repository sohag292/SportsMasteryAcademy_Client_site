import { useNavigate, useParams } from "react-router-dom";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import './CheckooutForm.css'

const CheckoutForm = ({ payClass, id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    // console.log('pay class', payClass)
    // class data 
    const price = parseFloat(payClass?.price);

    useEffect(() => {
        if (price > 0) {
            axios.post('https://sports-mastery-academy-server-site.vercel.app/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price])

    // pay button click function 
    const handleSubmit = async (event) => {
        setProcessing(true);
        event.preventDefault();
        if (!stripe || !elements) {
            setProcessing(false);
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            setProcessing(false);
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setProcessing(false);
            console.error('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('')
            // console.log('payment method', paymentMethod)
        }

       

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    }
                }
            })

        if (confirmError) {
            setProcessing(false);
            console.log(confirmError)
        }

       

        if (paymentIntent?.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)
            // send to mongodb 
            const payment = {
                classId: payClass?.classId,
                className: payClass?.className,
                classImage: payClass?.classImage,
                instructorName: payClass?.instructorName,
                instructorEmail: payClass?.instructorEmail,
                studentName: user?.displayName,
                studentEmail: user?.email,
                transactionId,
                price,
                date: new Date(),
            }
            const token = localStorage.getItem('access-token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios.post('https://sports-mastery-academy-server-site.vercel.app/payments', payment, config)
                .then(res => {
                    // console.log("from step one", res.data);
                    if (res.data.postResult.insertedId) {
                        axios.delete(`https://sports-mastery-academy-server-site.vercel.app/classes/selected?id=${payClass?.classId}&email=${user?.email}`, config)
                            .then(res => {

                                if (res.data.deletedCount > 0) {

                                    // after complete all payment steps
                                    setProcessing(false);
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Payment Success',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate("/dashboard/myEnrolledClasses", { replace: true });
                                    return;
                                    
                                }
                            })

                    }
                })

        }
        setProcessing(false);

    }

    return (
        <div>
            <div className={` ${!processing && "hidden"} text-primary my-5 flex flex-col items-center justify-center gap-4`}>
                <span className="loading loading-bars loading-lg"></span>
                <p>Please wait. Payment is processing</p>
            </div>

            <h1 className="text-xl my-5">Make payment for <span className="text-primary font-bold">{payClass?.className}</span></h1>

            <p className="my-5">Enter your Bank Details</p>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-success mt-4" disabled={!stripe || !clientSecret || processing || !user}>
                    {processing ? (
                        <span>
                            Processing <span className="loading loading-spinner"></span>
                        </span>
                    ) : (
                        "Pay"
                    )}
                </button>

            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;