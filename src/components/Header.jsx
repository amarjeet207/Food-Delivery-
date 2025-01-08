import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-slate-700 font-serif text-base text-white shadow-md ">
      
      <img src="https://img.freepik.com/premium-vector/minimalist-food-delivery-logo-design-modern-simple-branding-delivery-services_838011-283.jpg?semt=ais_hybrid"
       alt="logo" width="70px"  className='rounded-full -ml-36 mt-1 mb-1'  />

      <ul  className="flex gap-8">
        <li>Home</li>
        <li>Search</li>
        <li>Offers</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Header
