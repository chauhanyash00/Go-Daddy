import React from 'react'
import logo from '../assets/go-removebg-preview.png'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg background " data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="" className='tw-h-12' /> <span className='tw-text-white tw-absolute tw-text-sm -tw-mt-2 tw-block tw-pl-36 tw-font-bold'>India</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='xl:tw-flex lg:tw-block '>
    <div className="collapse navbar-collapse tw-font-bold tw-text-1xl tw-text-black" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li className="nav-item dropdown ">  
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Domains
          </a>
          <ul className="dropdown-menu dw-content tw-bg-white tw-text-black    margin1 tw-w-svw tw-text-lg max-xl:tw-text-xs">
              <div className='tw-h-80 tw-w-screen tw-container tw-flex tw-mt-10  '>
              <ul className='tw-ml-20 lg:tw-ml-12'>
                  <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
              <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
              <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
                  <li></li>
                  {/* <li><img className='' src={"https://img1.wsimg.com/cdnassets/transform/439199f2-6368-4a61-86f7-0c8f259d6639/img-meganav-domains-2"} /></li> */}
              </ul>
              </div>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Websites and Hosting
          </a>      
          <ul className="dropdown-menu dw-content tw-bg-white tw-text-black margin2 tw-w-svw tw-text-lg max-xl:tw-text-xs">
              <div className='tw-h-80 tw-w-screen tw-container tw-flex tw-mt-10'>
              <ul className='tw-ml-20 lg:tw-ml-12'>
                  <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span> </li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
              <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
              <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
                  <li></li>
                  <li><img data-src="https://img1.wsimg.com/cdnassets/transform/439199f2-6368-4a61-86f7-0c8f259d6639/img-meganav-domains-2" alt="" /></li>
              </ul>
              </div>
          </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded" href="#">Email</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Security
          </a>
          <ul className="dropdown-menu dw-content tw-bg-white tw-text-black margin3 tw-w-svw tw-text-lg max-xl:tw-text-xs ">
              <div className='tw-h-80 tw-w-screen tw-container tw-flex tw-mt-10'>
              <ul className='tw-ml-20 lg:tw-ml-12'>
                  <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
              <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
              <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
                  <li></li>
                  <li><img data-src="https://img1.wsimg.com/cdnassets/transform/439199f2-6368-4a61-86f7-0c8f259d6639/img-meganav-domains-2" alt="" /></li>
              </ul>
              </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marketing
          </a>
          <ul className="dropdown-menu dw-content tw-bg-white tw-text-black margin4 tw-w-svw tw-text-lg max-xl:tw-text-xs ">
              <div className='tw-h-80 tw-w-screen tw-container tw-flex tw-mt-10'>
              <ul className='tw-ml-20 lg:tw-ml-12'>
                  <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span> </li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span> </li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
              <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span> </li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span> </li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'>
              <li>FIND A DOMAIN</li>
                  <li className='tw-mt-16 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i className="fa-solid fa-magnifying-glass"></i></span> <span className='tw-ml-2'>Serch for Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-right-left"></i></span> <span className='tw-ml-2'>Transfer Domain Names</span></li>
                  <li className='tw-mt-6 tw-p-2 tw-rounded hover:tw-bg-slate-300 tw-delay-100'><span className='tw-bg-teal-500 tw-p-2 tw-rounded-xl tw-pt-1 tw-pb-1'><i class="fa-solid fa-list"></i></span> <span className='tw-ml-2'>Browse Domain Name Options </span></li>
              </ul>
              <ul className='tw-ml-20 lg:tw-ml-12'> 
                  <li></li>
                  <li><img data-src="https://img1.wsimg.com/cdnassets/transform/439199f2-6368-4a61-86f7-0c8f259d6639/img-meganav-domains-2" alt="" /></li>
              </ul>
              </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded" href="#">Pricing</a>
        </li>
      </ul>

    </div>  
    <div className=' collapse navbar-collapse '>
    <ul className="nav justify-content-end max-xl:tw-justify-center">
    <li className="nav-item">
          <a className="nav-link tw-ml-16 hover:tw-bg-gray-600 tw-rounded" aria-current="page" href="#">Contact Us</a>
    </li>
  <li className="nav-item">
    <a className="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded" href="#">Help</a>
  </li>
    <li className="nav-item dropdown">  
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign In
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
    </li>
    <li className="nav-item">
    <a className="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded" href="#">Shop</a>
    </li>
</ul>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
  