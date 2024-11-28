import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import './premium.css'

function premium() {
  return (
    <div className='premium'>
        <section  className='tw-mt-28'>
            <h1 className='tw-text-6xl tw-font-bold tw-text-center max-sm:tw-text-4xl max-sm:tw-mt-96'>Your idea, our help</h1>
            <div className='tw-flex tw-ml-5  tw-justify-center tw-mt-10  max-sm:tw-text-center max-sm:tw-hidden'>
                <div className='tw-border-2 tw-ml-3 tw-border-solid tw-rounded-3xl tw-pl-9 tw-pr-9 tw-border-black tw-p-4  tw-bg-black hover:tw-scale-105 tw-duration-150 tw-text-white'><span className='tw-text-1xl tw-font-semibold'>Domains</span></div>
                <div className='tw-border-2 tw-ml-3 tw-border-solid tw-rounded-3xl tw-pl-9 tw-pr-9 hover:tw-border-gray-900 tw-border-gray-500 hover:tw-scale-105 tw-duration-150 tw-p-4'><span className='tw-text-1xl tw-font-semibold'>Recommended</span></div>
                <div className='tw-border-2 tw-ml-3 tw-border-solid tw-rounded-3xl tw-pl-9 tw-pr-9 hover:tw-border-gray-900 tw-border-gray-500 hover:tw-scale-105 tw-duration-150  tw-p-4'><span className='tw-text-1xl tw-font-semibold'>WordPress and Security</span></div>
            </div><br />
            {/* <div className='tw-flex tw-mt-20 tw-w-4/5 tw-ml-40'>
              <div className='hover:tw-shadow-black tw-shadow-lg tw-duration-200'><img src={img3} alt="" className='width1 tw-rounded-lg'/></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div><img src={img1} alt="" className='tw-rounded-lg hover:tw-shadow-black tw-shadow-lg tw-duration-200' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={img2} alt="" className='tw-rounded-lg hover:tw-shadow-black tw-shadow-lg tw-duration-200' /></div>
            </div>
            <div className='tw-absolute -tw-mt-44 '>
                <span className='tw-text-4xl tw-font-bold tw-ml-44'>Domains</span>
                <p className='tw-ml-44 tw-text-1xl tw-w-96'>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                <button className='tw-bg-black tw-text-white tw-p-4 tw-pl-9 tw-pr-9 tw-ml-44 tw-mt-2 tw-rounded-xl hover:tw-scale-x-105 tw-duration-200'>Search Domains</button>
            </div>
            <br /><br />

            <div className='tw-ml-96 -tw-mt-96'>
                <div className='tw-absolute -tw-mt-40 max-lg:-tw-mt-10 tw-ml-60'>
                    <span className='tw-text-2xl tw-font-bold tw-ml-44'>.co for SG$ 10.99/1st year</span>
                    <p className='tw-ml-44 tw-text-1xl tw-w-1/3'>Ensure your company and website stand out with a .co domain. 2-year purchase required. Additional year(s) SG$ 64.99.</p>
                    <button className='tw-bg-black hover:tw-scale-x-105 tw-duration-200 tw-text-white tw-p-4 tw-pl-9 tw-pr-9 tw-ml-44 tw-mt-2 tw-rounded-xl'>Find Your Domain</button>
                </div>

                <div className='tw-absolute tw-mt-44 tw-ml-60'>
                    <span className='tw-text-2xl tw-font-bold tw-ml-44'>.in SG$ 16.75/1st yr</span>
                    <p className='tw-ml-44 tw-text-1xl tw-w-60'>Boost your local impact with our localized top-level domains.</p>
                    <button className='tw-bg-black hover:tw-scale-x-105 tw-duration-200 tw-text-white tw-p-4 tw-pl-9 tw-pr-9 tw-ml-44 tw-mt-2 tw-rounded-xl'>Get Started</button>
                </div>
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
            <div className='tw-container'>
                <div className='tw-flex tw-ml-32 max-sm:tw-ml-16 max-xl:tw-block max-xl:tw-ml-56 md:tw-ml-28'>
                    <div className='box-1'>
                        <div className='tw-ml-5 tw-absolute ImageBox tw-mt-10'>
                            <h1 className='tw-text-black tw-text-3xl max-xl:tw-text-5xl tw-font-bold md:tw-text-3xl max-xl:tw-mt-5 max-sm:tw-text-3xl max-sm:-tw-mt-36'>Domains</h1>
                            <p className='tw-text-black tw-font-sans  tw-w-96 max-xl:tw-hidden'>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                            <button className='tw-p-2 mt-2 max-xl:tw-hidden  tw-text-white tw-font-bold tw-pl-5 tw-pr-5 tw-rounded-sm  tw-bg-black hover:tw-scale-105 tw-duration-200'>Search Domains</button>
                            <p><i class="bi bi-arrow-right"></i></p>
                        </div>
                        <img src={img3} alt="IMAGE 1" className='hover:tw-shadow-black max-xl:tw-shadow-none tw-shadow-lg max-xl:tw-rounded-none tw-duration-200 tw-w-5/2 tw-h-full tw-rounded-lg max-xl:tw-w-4/5 max-xl:tw-h-full'/>
                    </div>
                    <div className='box-2'>
                        <div className='tw-ml-5 tw-absolute ImageBox'>
                            <h1 className='tw-text-black tw-text-3xl max-xl:tw-text-4xl max-xl:-tw-mt-36 tw-font-bold md:tw-text-3xl max-sm:tw-text-xl max-sm:-tw-mt-64'>.co for SG$0./1st year</h1>
                            <p className='tw-text-black tw-font-sans  tw-w-96 max-xl:tw-hidden'>Ensure your company and website stand out with a .co domain</p><p className='max-xl:tw-hidden'>
                            3-year purchase required. Additional years SG$64.</p>
                            <button className='tw-p-2 mt-2 tw-text-white tw-font-bold tw-pl-5 tw-pr-5 tw-rounded-sm  tw-bg-black hover:tw-scale-105 tw-duration-200 max-xl:tw-hidden'>Find Your Domains</button>
                        </div>
                        <img src={img1} alt="IMAGE 1" className='hover:tw-shadow-black max-xl:tw-shadow-none max-xl:tw-rounded-none tw-duration-200 tw-w-5/2 tw-h-full tw-rounded-lg max-xl:tw-w-4/5 max-xl:tw-h-full'/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
export default premium 