import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Restaurants } from '../Utilities/Data';
import close from "../assets/close.png";

const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState(Restaurants);
  const [isFastDeliveryApplied, setFastDeliveryApplied] = useState(false);
  const [isRatingsApplied, setRatingsApplied] = useState(false);

  // Function to apply Ratings filter (4+ ratings)
  
  function handleRatings() {
    const result = Restaurants.filter(Restaurant =>Restaurant.ratings >= 4);
    setRatingsApplied(true);
    
    if (isFastDeliveryApplied) {
      const filteredResult = result.filter(r => filterRestaurants.includes(r));
      setFilterRestaurants(filteredResult);
    } else {
      setFilterRestaurants(result);
    }
  }


  // Function to apply Fast Delivery filter
  function handleFastDelivery() {
    const result = Restaurants.filter(Restaurant => Restaurant.duration.split('-')[1] <= 35 );
    setFastDeliveryApplied(true);
    
    if (isRatingsApplied) {
      const filteredResult = result.filter(r => filterRestaurants.includes(r));
      setFilterRestaurants(filteredResult);
    } else {
      setFilterRestaurants(result);
    }
  }

  // Function to handle closing any filter
  function handleRemoveFilter(e) {
    const filterType = e.target.id;
    if (filterType === 'fastClose') {
      setFastDeliveryApplied(false);
      if (isRatingsApplied) {
        setFilterRestaurants(Restaurants.filter(Restaurant => Restaurant.ratings >= 4));
      } else {
        setFilterRestaurants(Restaurants); // Reset to all restaurants if no filter applied
      }
    } else if (filterType === 'ratingClose') {
      setRatingsApplied(false);
      if (isFastDeliveryApplied) {
        setFilterRestaurants(Restaurants.filter(Restaurant => Restaurant.duration.split('-')[1] <= 35 ));
      } else {
        setFilterRestaurants(Restaurants); // Reset to all restaurants if no filter applied
      }
    }
  }



  return (
    <div className="font-serif mt-14 ml-36 mr-28">
      <h1 className="text-2xl font-bold">Restaurants with online food delivery</h1>

      <div className="flex gap-6 mt-8">
        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md flex items-center gap-2">
          <p onClick={handleFastDelivery}>Fast Delivery</p>
          {isFastDeliveryApplied && (
            <img src={close} className="w-4" onClick={handleRemoveFilter} id="fastClose" />
          )}
        </span>

        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md">Sort By</span>

        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md flex items-center gap-2">
          <p onClick={handleRatings}>Ratings 4.0+</p>
          {isRatingsApplied && (
            <img src={close} className="w-4" onClick={handleRemoveFilter} id="ratingClose" />
          )}
        </span>

        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md">Offers</span>
        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md">Less than 300</span>
        <span className="cursor-pointer border-2 border-slate-500 pt-1 pb-1 pr-4 pl-4 rounded-full shadow-md">Pure Veg</span>
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
