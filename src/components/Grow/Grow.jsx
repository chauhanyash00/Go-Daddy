import React from 'react'
// import pc from '../assets/pc.webp'
import '../Grow/Grow.css'

export default function Grow() {

  let moveit = () => {
    document.getElementById("div-bg-img").style.background = 'url(https://img1.wsimg.com/cdnassets/transform/475af367-8a35-4d15-a838-37d8114ea080/intl-img-bl-prod-feature-get-online-fast-desktop)'
  }

  let moveit2 = () => {
    document.getElementById("div-bg-img").style.background = 'url(https://img1.wsimg.com/cdnassets/transform/589acd99-ccfd-439a-88cb-1b5d7ee5f99f/intl-img-bl-prod-feature-build-trust-desktop)'
  }

  let moveit3 = () => {
    document.getElementById("div-bg-img").style.background = 'url(https://img1.wsimg.com/cdnassets/transform/305e0fdd-0043-42cd-851e-5a6a00df7576/intl-img-bl-prod-feature-engage-with-marketing-desktop)'
  }

  return (
    <div className='Grow'>
    <div> 
      <div className=''>
        <h1 className='tw-text-5xl tw-text-center tw-font-bold tw-mt-10 heading-grow'>Grow your brand with Websites + Marketing.</h1><br /><br />
      </div>
      {/* <img src={pc} alt="" className='tw-w-full tw-pl-20 tw-pr-20'/> */}
      
      <br />
      {/* <div className='tw-flex'>
        <div className='tw-text-3xl tw-font-bold'>
            <h1>Get online fast. No design skills needed. </h1>
        </div>
        <div></div> 
        <div></div>
      </div> */}
      <div className='Main-Grow'>
      <div id='div-bg'>
        <div id='div-bg-img'>
        </div>
      </div> 
      <div className='tw-flex tw-justify-evenly tw-mt-28'>
        <div class="card tw-border-none mb-3 tw-w-96 max-xl:tw-w-80 tw-h-60 hover:tw-bg-slate-300 tw-duration-200" onMouseMove={moveit} >
          <div class="card-body text-secondary">
            <h5 class="card-title tw-text-3xl tw-font-bold tw-text-black font">Get online fast. No design skills needed. </h5>
            <p class="card-text tw-text-black">Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
          </div>
        </div>
        <div class="card tw-border-none mb-3 tw-w-96 max-xl:tw-w-80 tw-h-60 hover:tw-bg-slate-300 tw-dura  tion-200" onMouseMove={moveit2}>
          <div class="card-body text-secondary">
            <h5 class="card-title tw-text-3xl tw-font-bold tw-text-black font">Build trust with email that matches your domain. </h5>
            <p class="card-text tw-text-black">Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
          </div>
        </div>
        <div class="card tw-border-none mb-3 tw-w-96 max-xl:tw-w-80 tw-h-60 hover:tw-bg-slate-300 tw-duration-200" onMouseMove={moveit3}>
          <div class="card-body text-secondary">
            <h5 class="card-title tw-text-3xl tw-font-bold tw-text-black font">Engage with marketing tools.</h5>
            <p class="card-text tw-text-black">Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
          </div>
        </div>
      </div>
      <div className='button'>
        <button className='tw-bg-black tw-text-white tw-p-3 tw-pr-10 tw-pl-10 tw-rounded-md tw-font-bold hover:tw-scale-x-105 tw-duration-200'>Start for Free</button>
      </div>
      </div>

            <div id="carouselExample" className="carousel slide slider">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='tw-flex'>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/db04a2fe-f1dd-47cf-9805-02e7281d65e5/intl-img-bl-prod-feature-get-online-fast-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold ">Get online fast. No design skills needed. </h1>
                                            <p className="">Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
                                        </div>
                                    </div>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/2ba9e3e7-09ca-4328-a731-a71aee2de27c/intl-img-bl-prod-feature-build-trust-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold ">Build trust with email that matches your domain.  </h1>
                                            <p className="">Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='tw-flex'>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/49b4d83b-f74f-4850-898a-d3f981262e24/intl-img-bl-prod-feature-engage-with-marketing-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold ">Engage with marketing tools. </h1>
                                            <p className="">Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
                                        </div>
                                    </div>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/db04a2fe-f1dd-47cf-9805-02e7281d65e5/intl-img-bl-prod-feature-get-online-fast-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold ">Get online fast. No design skills needed. </h1>
                                            <p className="">Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='tw-flex'>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/2ba9e3e7-09ca-4328-a731-a71aee2de27c/intl-img-bl-prod-feature-build-trust-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold ">Build trust with email that matches your domain.  </h1>
                                            <p className="">Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
                                        </div>
                                    </div>
                                    <div className="card tw-rounded-xl tw-overflow-hidden tw-m-4">
                                        <img src="https://img1.wsimg.com/cdnassets/transform/49b4d83b-f74f-4850-898a-d3f981262e24/intl-img-bl-prod-feature-engage-with-marketing-portrait" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h1 className="tw-text-gray-900 tw-mb-2 tw-font-bold ">Engage with marketing tools. </h1>
                                            <p className="">Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

    </div>
    </div>
  )
}



{/* <section class="tw-text-gray-600 tw-body-font">
  <div class="tw-container tw-px-5 tw-py-24 tw-mx-auto">
    <div class="tw-flex tw-flex-wrap tw--m-4">
      <div class="tw-p-4 tw-lg:w-1/3">
        <div class="tw-h-full tw-bg-gray-100 tw-bg-opacity-75 tw-px-8 tw-pt-16 tw-pb-24 tw-rounded-lg tw-overflow-hidden tw-text-center tw-relative">
          <h2 class="tw-tracking-widest tw-text-xs tw-title-font tw-font-medium tw-text-gray-400 tw-mb-1">CATEGORY</h2>
          <h1 class="tw-title-font tw-sm:text-2xl tw-text-xl tw-font-medium tw-text-gray-900 tw-mb-3">Raclette Blueberry Nextious Level</h1>
          <p class="tw-leading-relaxed tw-mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="tw-text-indigo-500 tw-inline-flex tw-items-center">Learn More
            <svg class="tw-w-4 tw-h-4 tw-ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="tw-text-center tw-mt-2 tw-leading-none tw-flex tw-justify-center tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-py-4">
            <span class="tw-text-gray-400 tw-mr-3 tw-inline-flex tw-items-center tw-leading-none tw-text-sm tw-pr-3 tw-py-1 tw-border-r-2 tw-border-gray-200">
              <svg class="tw-w-4 tw-h-4 tw-mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span class="tw-text-gray-400 tw-inline-flex tw-items-center tw-leading-none tw-text-sm">
              <svg class="tw-w-4 tw-h-4 tw-mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
      <div class="tw-p-4 tw-lg:w-1/3">
        <div class="tw-h-full tw-bg-gray-100 tw-bg-opacity-75 tw-px-8 tw-pt-16 tw-pb-24 tw-rounded-lg tw-overflow-hidden tw-text-center tw-relative">
          <h2 class="tw-tracking-widest tw-text-xs tw-title-font tw-font-medium tw-text-gray-400 tw-mb-1">CATEGORY</h2>
          <h1 class="tw-title-font tw-sm:text-2xl tw-text-xl tw-font-medium tw-text-gray-900 tw-mb-3">Ennui Snackwave Thundercats</h1>
          <p class="tw-leading-relaxed tw-mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="tw-text-indigo-500 tw-inline-flex tw-items-center">Learn More
            <svg class="tw-w-4 tw-h-4 tw-ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="tw-text-center tw-mt-2 tw-leading-none tw-flex tw-justify-center tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-py-4">
            <span class="tw-text-gray-400 tw-mr-3 tw-inline-flex tw-items-center tw-leading-none tw-text-sm tw-pr-3 tw-py-1 tw-border-r-2 tw-border-gray-200">
              <svg class="tw-w-4 tw-h-4 tw-mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span class="tw-text-gray-400 tw-inline-flex tw-items-center tw-leading-none tw-text-sm">
              <svg class="tw-w-4 tw-h-4 tw-mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
      <div class="tw-p-4 tw-lg:w-1/3">
        <div class="tw-h-full tw-bg-gray-100 tw-bg-opacity-75 tw-px-8 tw-pt-16 tw-pb-24 tw-rounded-lg tw-overflow-hidden tw-text-center tw-relative">
          <h2 class="tw-tracking-widest tw-text-xs tw-title-font tw-font-medium tw-text-gray-400 tw-mb-1">CATEGORY</h2>
          <h1 class="tw-title-font tw-sm:text-2xl tw-text-xl tw-font-medium tw-text-gray-900 tw-mb-3">Selvage Poke Waistcoat Godard</h1>
          <p class="tw-leading-relaxed tw-mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="tw-text-indigo-500 tw-inline-flex tw-items-center">Learn More
            <svg class="tw-w-4 tw-h-4 tw-ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="tw-text-center tw-mt-2 tw-leading-none tw-flex tw-justify-center tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-py-4">
            <span class="tw-text-gray-400 tw-mr-3 tw-inline-flex tw-items-center tw-leading-none tw-text-sm tw-pr-3 tw-py-1 tw-border-r-2 tw-border-gray-200">
              <svg class="tw-w-4 tw-h-4 tw-mr-1" stroke="currentColor" stroke-width=" */}