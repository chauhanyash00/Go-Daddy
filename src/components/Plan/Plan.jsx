import React from 'react'
import './Plan.css'

export default function Plan() {
  return (
    <div>
        <div className='tw-mt-10 tw-text-center tw-font-serif'>
            <h1 className='tw-text-5xl tw-font-bold  md:tw-text-4xl heading'>More tools to grow your business.</h1>
            <p className='tw-text-lg tw-font-sans tw-mt-7'>We're known for domains, but check out other essentials to take your business further online.</p>
        </div>
        <div className='main-box tw-flex tw-mt-0'>
          <div className='img'>
            <div><img src={"https://img1.wsimg.com/cdnassets/transform/5a86c058-8d48-46c9-8532-c2af07e2b815/en-img-brand-lander-professional-email"} alt="" /></div>
            <div className='tw-font-sans tw-p-3'>
              <h3 className='tw-text-3xl tw-font-bold'>Professional Email</h3>
              <p className='tw-mt-2 tw-text-1xl main-content'>Show customers you're a pro with an email address that matches your domain. Get Professional Email today.</p>
              <div className='tw-mt-3'>
              <span>As low as</span><br />
              <span>₹ 39.00 per user/mo</span><br />
              </div>
              <button className='tw-p-3 tw-mt-3 tw-pl-10 tw-pr-10 tw-rounded tw-text-black tw-bg-transparent tw-border-black tw-border-2 tw-border-solid hover:tw-pl-11 tw-duration-200'>Explore Plans</button>
            </div>
          </div>
          <div className='img'>
          <div><img src={"https://img1.wsimg.com/cdnassets/transform/850393f4-30e2-4b3d-9627-17f2c5557c47/en-img-brand-lander-web-hosting"} alt="" /></div>
          <div className='tw-font-sans tw-p-3'>
              <h3 className='tw-text-3xl tw-font-bold'>Web Hosting</h3>
              <p className='tw-mt-2 tw-text-1xl main-content'>Whether you want hosting for one or 100 websites, we've got plans to keep everything running in peak form.</p>
              <div className='tw-mt-3'>
              <span className=''>As low as</span><br />  
              <span>₹ 89.00 per user/mo</span><br />
              </div>
              <button className='tw-p-3 tw-mt-3 tw-pl-10 tw-pr-10 tw-rounded tw-text-black tw-bg-transparent tw-border-black tw-border-2 tw-border-solid hover:tw-pl-11 tw-duration-200'>Explore Plans</button>
          </div>
          </div>
        </div>
    </div>
  )
}
