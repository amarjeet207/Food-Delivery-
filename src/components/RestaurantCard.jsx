import React from 'react'

const RestaurantCard = (props) => {

  const {src,name,ratings,duration,desc,add} = props.details;

  return (
    <div className="mt-10 font-serif transition-transform hover:scale-95 delay-75">

      <img src={src}  className="rounded-3xl w-56 h-40 object-cover object-center-bottom"/>
      <p className="mt-3  ml-5 font-extrabold">{name}</p>
      <span className='ml-5'>{ratings}</span>
      <span className="ml-1 ">● {duration} min</span>
      <p className="text-neutral-600 ml-5">{desc}</p>
      <p className="text-neutral-600 ml-5">{add}</p>
        
    </div>
  )
}

export default RestaurantCard
