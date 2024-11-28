import React from 'react'
import './Footer.css'
import logo from '../assets/go-removebg-preview.png'

export default function Footer() {
  return (
    <div>
          <footer className="footer">
            <div className='border-bottom'>
              <img src={logo} className='tw-w-40' /><br />
            </div><br />
      <div className="footer-container ">
        <div className="footer-section">
          <h4 className='tw-font-bold'>About GoDaddy</h4>
          <ul>
            <li className='footer-content'>About Us</li>
            <li className='footer-content'>Annual Returns</li>
            <li className='footer-content'>Careers</li>
            <li className='footer-content'>Contact Us</li>
            <li className='footer-content'>Corporate Social Responsibility</li>
            <li className='footer-content'>GoDaddy Blog</li>
            <li className='footer-content'>Investor Relations</li>
            <li className='footer-content'>Legal</li>
            <li className='footer-content'>Newsroom</li>
            <li className='footer-content'>Trust Center</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className='tw-font-bold'>Support</h4>
          <ul>
            <li className='footer-content'>Product Support</li>
            <li className='footer-content'>Report Abuse</li>
            <li className='footer-content'>Resources</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className='tw-font-bold'>Resources</h4>
          <ul>
            <li className='footer-content'>Webmail</li>
            <li className='footer-content'>WHOIS</li>
            <li className='footer-content'>ICANN Confirmation</li>
            <li className='footer-content'>Designers & Developers</li>
            <li className='footer-content'>Redeem Code</li>
            <li className='footer-content'>Product Catalog</li>
            <li className='footer-content'>Customer Testimonials</li>
            <li className='footer-content'>Business Name Generator</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className='tw-font-bold'>Partner Programs</h4>
          <ul>
            <li className='footer-content'>Affiliates</li>
            <li className='footer-content'>Reseller Programs</li>
            <li className='footer-content'>GoDaddy Pro</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className='tw-font-bold'>Account</h4>
          <ul>
            <li className='footer-content'>My Products</li>
            <li className='footer-content'>Renewals & Billing</li>
            <li className='footer-content'>Create Account</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className='tw-font-bold'>Shopping</h4>
          <ul>
            <li className='footer-content'>Buy a Domain</li>
            <li className='footer-content'>Websites</li>
            <li className='footer-content'>Business Email</li>
            <li className='footer-content'>WordPress</li>
            <li className='footer-content'>Hosting</li>
            <li className='footer-content'>Web Security</li>
            <li className='footer-content'>Logo Generator</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className='border-bottom'>
        <img src={logo} alt="" className='tw-w-64' /><br />
        </div>
        <div className='tw-container tw-text-1xl tw-mt-5 tw-font-sans tw-font-semibold'>
        <p>Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries. The “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.</p><br />
        <p>
        Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these Universal Terms of Service.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
