import React from 'react'
import './Onward.css'

export default function Onward() {
  return (
    <div>
       <div className='tw-ml-10'>
        <h1 className='tw-text-5xl tw-font-sans tw-font-bold tw-w-2/5  onward-heading'>Onward and upward with our customers.</h1>
      </div>
      <div className='tw-mt-5 tw-p-5'>
          <div><img className='tw-rounded-2xl tw-h-full onward-img' src={"https://img1.wsimg.com/cdnassets/transform/d5382385-bb63-435e-bbf7-b20816e2d160/Raheim-Thompson-D"} alt="" /></div>
          <div><img src={"https://img1.wsimg.com/cdnassets/transform/03790a5c-4503-450f-8786-bbdacfb66dc0/Raheim-Thompson-M"} className='onward-img2 tw-rounded-2xl' alt='logo' /></div>

          <div className='tw-p-3'>
          <div className='img-box'> 
              <p className='tw-text-4xl onward-content tw-font-semibold tw-w-5/7'>“GoDaddy's Website Builder is super-convenient for somebody who has an idea of what they're trying to create, but might not have any technical skills.”
              </p>
              <div className='tw-mt-40 onward-main-content'>
                <span>Products used by</span><br />
                <span className='tw-font-semibold'>Roletape:</span><br /><br />
                <span>Domain</span><br />
                <span>Online Store</span><br />
                <span>SSL Certificates</span>
            <img className='tw-rounded tw-ml-56 -tw-mt-72 onward-small-img' src={"https://img1.wsimg.com/cdnassets/transform/bc4b4bee-f709-4f8b-b606-a92a74286ae2/Raheim-Thompson-site"} alt="" />
          </div>
          </div>
          
          </div>
      </div>
      <div>
        <div><img className='tw-w-full tw-h-full normal-img' src={"https://img1.wsimg.com/cdnassets/transform/5471a319-d006-4ef1-b8f0-6079f3d8b5da/mrq-Guide-IN-PK-Suraiya-desktop"} alt="" /></div>
        <div><img src={"https://img1.wsimg.com/cdnassets/transform/373795fc-f4f1-4258-baf4-4912056db214/mrq-Guide-IN-PK-Suraiya-tablet"} className='guides-img tw-w-full' alt="" /></div>
        <div className='go-daddy-head'>
        <span><img className='tw-absolute' src={"https://img1.wsimg.com/cdnassets/m/28edcf2f3f8529b/original/gd-guides-logo.svg"} alt="" /></span><br />
        <div>
          <h1 className='tw-font-serif tw-text-5xl guides-heading tw-mt-5 tw-font-bold'>We love to help. Seriously.</h1><br />
          <p className='tw-font-normal guides-content tw-text-1xl'>Still not sure what you need? We're happy to help, even if you're not a customer. Contact us and we'll chat — or get back to you as soon as we can.</p><br />
          <button className='tw-p-3 tw-mt-3 tw-pl-10 tw-pr-10 tw-rounded tw-font-bold tw-text-white tw-bg-black tw-border-black tw-border-2 tw-border-solid hover:tw-pl-11 tw-duration-200'>Get Help</button>
        </div>
        </div>
      </div>
    </div>
  )
}

