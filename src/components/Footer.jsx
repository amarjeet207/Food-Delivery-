import React from 'react';
import facebook from "../assets/facebook-brands-solid.svg";
import insta from "../assets/instagram-brands-solid.svg"
import twitter from "../assets/twitter-brands-solid.svg"
const Footer = () => {
  return (
    <div className="mt-28 border-t border-slate-500 bg-slate-500">
      
      <span className="flex justify-center items-center gap-6 mt-8">
      <h2 className="font-bold text-2xl text-slate-100">For better experience,download the Food Delivery app <br /> now</h2>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" className="w-52 h-18" />
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"  className="w-52 h-18" />
      </span>
      
      <span className="grid grid-cols-5 ml-48 mr-60 mt-20 gap-8 ">
      
       <p className="text-slate-100"> 
       <img src="https://img.freepik.com/premium-vector/minimalist-food-delivery-logo-design-modern-simple-branding-delivery-services_838011-283.jpg?semt=ais_hybrid"
       alt="logo" width="70px"  className='rounded-full mb-5'  />
       &copy; '24 Food Delivery</p>

       <ul className=" text-slate-100">
        <li className="font-bold text-lg mb-4">Company</li>
        <li className="mb-2">About Us</li>
        <li className="mb-2">Careers</li>
        <li className="mb-2">Culture</li>
        <li className="mb-2">People</li>
        <li className="mb-2">Explore</li>
        <li >Team</li>
       </ul>

       <ul className= " text-slate-100">
        <li className="font-bold text-lg mb-4">Contact us</li>
        <li className="mb-2"> Help & Support</li>
        <li className="mb-2">Partner with us</li>
        <li >Ride with us</li>
       </ul>

       <ul className=" text-slate-100">
        <li className="font-bold text-lg mb-4">Available in:</li>
        <li className="mb-2">Bangalore</li>
        <li className="mb-2">Gurgaon</li>
        <li className="mb-2">Hyderabad</li>
        <li className="mb-2">Delhi</li>
        <li >Mumbai</li>
       </ul>

       <ul className=" text-slate-100 ">
        <li className="font-bold text-lg mb-4">Legal</li>
        <li className="mb-2">Terms & Conditions</li>
        <li className="mb-2">Cookie Policy</li>
        <li className="mb-2">Privacy Policy</li>
        <li>Investor Relations</li>
       </ul>

       <ul className=" text-slate-100 ">
        <li className="font-bold text-lg mb-4">Social Links</li>
        <li className="mb-2"><img src={facebook} className="w-10 h-5"  /></li>
        <li className="mb-2"><img src={insta} className="w-10 h-5" /></li>
        <li className="mb-2"><img src={twitter} className="w-10 h-5"/></li>
       </ul>


      </span>
  
    </div>
  )
}

export default Footer
