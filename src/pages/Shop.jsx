// import React from 'react'
// import Hero from '../components/Hero/Hero'
// import Popular from '../components/Popular/Popular'
// // eslint-disable-next-line no-unused-vars
// import OfferBanner from '../components/OfferBanner/OfferBanner'
// import Offerbar from '../components/Offerbar/Offerbar'
// import NewCollections from '../components/NewCollections/NewCollections'
// // import NewsLetter from '../components/NewsLetter/NewsLetter'

// const Shop = () => {
//   return (
//     <div>
//         <Offerbar/>
//         <Hero/>
//         <Popular/>
//         <OfferBanner/>
//         {/* <Offers/> */}
//         <NewCollections/>
//         {/* <NewsLetter/> */}
//     </div>
//   )
// }

// export default Shop


import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import OfferBanner from '../components/OfferBanner/OfferBanner';
import Offerbar from '../components/Offerbar/Offerbar';
import NewCollections from '../components/NewCollections/NewCollections';
import Login from '../pages/Login';
import CategoryCarousel from '../components/CategoryCarousal';

const Shop = () => {
  // const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div>
      <Offerbar/>
      <Hero/>
      <CategoryCarousel/>
      <Popular/>
      <OfferBanner/>
      <NewCollections/>
      {/* <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}
    </div>
  );
};

export default Shop;