import React from 'react'
import main from '../assets/main.jpg'
import Air from '../assets/Air logo.svg'
import '../Main/Main.css'

function Main() { 
  return (
    <div>
      <section className='tw-flex f-main'>
      <section className='tw-mt-10 tw-ml-8 tw-w-4/6 f2-main'>
        <div><img src={main} alt="Main image" className='tw-rounded-3xl Main '/>
          <div className='tw-absolute New'>
            <span className='tw-bg-white tw-p-1 tw-rounded-sm tw-font-bold tw-text-sm'>NEW</span>
            <span><img src={Air} alt="" className='tw-mt-5 tw-text-5xl' /></span>
            <span><h1 className='tw-text-6xl tw-text-black tw-font-bold tw-font-serif tw-mt-5 tw-w-96 lg:tw-w-80 lg:tw-text-5xl f-text'>Put your  domain into  action with AI. </h1></span>
            <span><p className='tw-w-96 max-md:tw-w-64 tw-mt-5 tw-font-semibold'>Buy a new domain and get GoDaddy Airo™, our customizable, AI-powered solution that can easily deliver a website, logo, and more.^</p></span>
            <span><button className='tw-p-3 tw-pl-10 tw-pr-10 tw-mt-5 hover:tw-scale-x-105 tw-duration-200 tw-text-white tw-bg-black tw-rounded-xl'>Learn More</button></span>
          </div>  
        </div>  
      </section>
      {/* <div className='tw-bg-black tw-float-right tw-rounded-3xl tw-mr-10 tw-w-72 tw-justify-center tw-text-center tw-p-9'>
        <button className="tw-bg-teal-500 tw-text-white tw-font-semibold tw-py-2 tw-px-2 tw-rounded-xl">
            NEW 
        </button><br /><br />
        <p className='tw-text-white tw-font-bold'>AI Suggested Domains</p><br />
        <h1 className='tw-text-2xl tw-font-black tw-text-white'>Find the perfect <br />domain and <br /> business name <br /> with AI.</h1><br />
        <button className="tw-bg-white tw-text-black tw-font-semibold tw-pPy-2 tw-px-2 tw-rounded-md">  
            Try AI domain Search.
        </button> 
              </div> */}
              <div className='New-box'>
              <div className='tw-bg-black tw-float-right tw-rounded-3xl tw-mt-9 tw-ml-10 height'>
                <div className='tw-mt-32 tw-ml-28 box-content'>
                    <span className='tw-bg-blue-200 tw-p-1 tw-rounded-sm tw-font-bold tw-ml-16 tw-mt-10 tw-text-sm'>NEW</span><br /><br />
                    <span className='tw-text-white tw-font-bold tw-font-sans'>AI Suggested Domains</span>
                </div><br />
                <div className='tw-ml-4 tw-text-center'>
                  <span className='tw-w-0 tw-font-serif tw-text-white box'>Find the perfect domain and business name with AI.</span>
                  <button className='tw-p-3 tw-pl-10 tw-pr-10 tw-mt-5 hover:tw-scale-x-105 tw-duration-200 tw-text-black tw-bg-white tw-rounded-xl'>Try AI Domaim Search</button>
                </div>
              </div>
              </div>
      </section>
    </div>
  )   
}

export default Main
