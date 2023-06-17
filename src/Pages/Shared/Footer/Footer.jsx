import React from 'react'

export default function Footer() {
  return (
    <div className='bg-base-200'>
      <footer className="footer p-10  text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Rules & Regulations</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Classe</a>
          <a className="link link-hover">Instructors</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">+8801730392999</a>
          <a className="link link-hover">info@cricketacademy.com</a>
          <a className="link link-hover"> Cricket Academy Kanchan- 1461</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by SportsMasterAcademy</p>
        </div>
        
      </footer>
    </div>
  )
}
