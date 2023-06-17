import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
            <div className="lg:flex lg:items-center lg:space-x-10">
                <img
                    src="https://illustrations.popsy.co/purple/resistance-band.svg"
                    alt="question-mark"
                    className="h-[300px] w-auto"
                />
                <div>
                    <p className="mt-6 text-sm font-semibold text-black">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                        We can&apos;t find that page
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                    </p>
                    <div className="mt-6 flex items-center space-x-3">
                        <Link to='/'
                            type="button"
                            className="inline-flex items-center rounded-md border border-black hover:border-none px-3 py-2 text-sm font-semibold text-black hover:bg-primary hover:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Go back
                        </Link>
                        <button
                            type="button"
                            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;