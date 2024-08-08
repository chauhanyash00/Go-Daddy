import React from 'react'
import logo from '../assets/go-removebg-preview.png'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg background " data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="" className='tw-h-12' /> <span className='tw-text-white tw-absolute tw-text-sm -tw-mt-2 tw-block tw-pl-36 tw-font-bold'>India</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse tw-font-bold tw-text-1xl tw-text-black" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li className="nav-item dropdown">  
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Domains
          </a>
          <ul className="dropdown-menu dw-content">
              <div className='tw-h-96 tw-w-screen tw-container tw-flex'>
              <ul className='tw-ml-20'>
                  <li>FIND A DOMAIN</li>
                  <li className='tw-pt-20'><span><span className=''><i class="fa-solid fa-magnifying-glass"></i></span>Serch for Domain Names</span></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
              <ul className='tw-ml-20'>
                  <li>AUCTION</li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
              <ul className='tw-ml-20'>
                  <li>DOMAIN</li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
              <ul className='tw-ml-20'>
                  <li>IMAGE</li>
                  <li></li>
              </ul>
              </div>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Websites and Hosting
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded" href="#">Email</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Security
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marketing
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded" href="#">Pricing</a>
        </li>
      </ul>
    </div>
    <div className=' collapse navbar-collapse tw-text-white'>
    <ul class="nav justify-content-end">
    <li class="nav-item">
          <a class="nav-link tw-ml-16 hover:tw-bg-gray-600 tw-rounded" aria-current="page" href="#">Contact Us</a>
    </li>
  <li class="nav-item">
    <a class="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded" href="#">Help</a>
  </li>
    <li className="nav-item dropdown">
          <a className="nav-link tw-ml-5 dropdown-toggle hover:tw-bg-gray-600 tw-rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign In
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
    </li>
    <li class="nav-item">
    <a class="nav-link tw-ml-5 hover:tw-bg-gray-600 tw-rounded" href="#">Shop</a>
    </li>
</ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
