import React from 'react'
import Store from '../assets/Store.svg'

function Section1() {
  return (
    <div className='tw-pl-8 tw-pr-10'>
      <div className='tw-mt-10 tw-p-2 tw-bg-gray-300 tw-rounded'>
      <form class="d-flex tw-h-20 tw-pl-5 tw-pr-60 max-lg:tw-pr-7" role="search">
        <input class=" tw-w-full form-control  tw-text-3xl max-md:tw-text-lg tw-font-bold" type="search" placeholder="Type the domain you want" aria-label="Search"  />
        <div className='hover:tw-bg-white tw-duration-100 -tw-mr-52 tw-p-2 tw-rounded max-lg:tw-hidden'>
          <img src={Store} alt='Store Img'  className='tw-w-14 tw-mt-7'/>
          <div className='tw-ml-20 tw-w-48 -tw-mt-10'>
          <span className='tw-mt-5 tw-w-5 hover:tw-text-blue-800 tw-font-bold'> $229.00*/1st&nbsp;yr</span>
          <br />
          <span className='tw-text-xs'>Satisfy the world's buyers with .shop</span>
          </div>
        </div>
      </form> 
    </div> 
    </div>
  )     
}
export default Section1