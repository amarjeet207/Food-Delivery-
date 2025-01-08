import React, { useState,useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { Restaurants } from '../Utilities/Data';
import close from "../assets/close.png";

const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState(Restaurants);
  const [isFastDeliveryApplied, setFastDeliveryApplied] = useState(false);
  const [isRatingsApplied, setRatingsApplied] = useState(false);
  const [isPureVegApplied, setPureVegApplied] = useState(false);


  //useEffect---
  useEffect(() => {
    let result = Restaurants;

    if(isRatingsApplied){
      result = result.filter(Restaurant =>Restaurant.ratings >= 4);
    }

    if(isFastDeliveryApplied){
       result = result.filter(Restaurant => Restaurant.duration.split('-')[1] <= 35 );
    }

    if(isPureVegApplied){
      result = result.filter(Restaurant => Restaurant.veg === "pure")
    }

    setFilterRestaurants(result);
    
  }, [isRatingsApplied,isFastDeliveryApplied,isPureVegApplied])
  

  // Function to apply Ratings filter (4+ ratings)
  
  function handleRatings() {
    setRatingsApplied(!isRatingsApplied);
  }

  // Function to apply Fast Delivery filter
  function handleFastDelivery() {
    setFastDeliveryApplied(!isFastDeliveryApplied);
  }

  function handlePureVeg(){
    setPureVegApplied(!isPureVegApplied)
  }

  // Function to handle closing any filter
  function handleRemoveFilter(e) {
    const filterType = e.target.id;
    if (filterType === 'fastClose') {
      setFastDeliveryApplied(false);
    } 
    else if (filterType === 'ratingClose') {
      setRatingsApplied(false);
    }
    else if (filterType === 'pureVegClose') {
      setPureVegApplied(false);
    }
    
  }



  return (
    <div className="font-serif mt-14 ml-36 mr-28">
      <h1 className="text-2xl font-bold">Restaurants with online food delivery</h1>

      <div className="flex gap-6 mt-6">
        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md flex items-center gap-2">
          <p onClick={handleFastDelivery} className="text-gray-800">Fast Delivery</p>
          {isFastDeliveryApplied && (
            <img src={close} className="w-4" onClick={handleRemoveFilter} id="fastClose" />
          )}
        </span>

        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md text-gray-800">Sort By</span>

        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md flex items-center gap-2">
          <p onClick={handleRatings} className="text-gray-800">Ratings 4.0+</p>
          {isRatingsApplied && (
            <img src={close} className="w-4" onClick={handleRemoveFilter} id="ratingClose" />
          )}
        </span>

        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md text-gray-800">Offers</span>
        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md text-gray-800">Less than 300</span>
        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md flex items-center gap-2">
        <p onClick={handlePureVeg} className="text-gray-800">Pure Veg</p>
        {isPureVegApplied && (
            <img src={close} className="w-4" onClick={handleRemoveFilter} id="pureVegClose" />
          )}
        
        </span>
      </div>

      <p className="grid grid-cols-4">
        {filterRestaurants.map((Restaurant) => (
          <RestaurantCard key={Restaurant.name} details={Restaurant} />
        ))}
      </p>
    </div>
  );
};

export default Body;
