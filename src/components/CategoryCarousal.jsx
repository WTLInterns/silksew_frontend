import React, { useRef } from 'react';
import '../styles/CategoryCarousel.css';

const categories = [
  {
    id: 1,
    name: 'Bestsellers',
    image: 'https://img.theloom.in/pwa/loom/banners/SutraArtofClothing_SAC1_Promo.jpg'
  },
  {
    id: 2,
    name: 'Celebrity',
    image: 'https://www.beyoung.in/api/catalog/homepage-nov/homepage-jan25/LOVED_BY_BEYOUNGESTERS/chirag.jpg'
  },
  {
    id: 3,
    name: 'Summer Fits',
    image: 'https://www.beyoung.in/api/catalog/homepage-nov/homepage-jan25/LOVED_BY_BEYOUNGESTERS/amitgurjar.jpg'
  },
  {
    id: 4,
    name: 'Co-Ord Sets',
    image: 'https://imagescdn.pantaloons.com/img/app/product/1/1103602-19026498.jpg?auto=format&w=450'
  },
  {
    id: 5,
    name: 'Suit Sets',
    image: 'https://www.beyoung.in/api/catalog/homepage-nov/homepage-apr-25/too-fresh-cargo.jpg'
  },
  {
    id: 6,
    name: 'Dresses',
    image: 'https://img.theloom.in/pwa/loom/banners/Sanyogini_SSY60_Promo.jpg'
  },
  {
    id: 7,
    name: 'Kidswear',
    image: 'https://www.beyoung.in/api/catalog/homepage-nov/homepage-jan25/LOVED_BY_BEYOUNGESTERS/anshkarhana.jpg'
  }
];

const CategoryCarousel = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth / 2;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth / 2;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full overflow-hidden py-4 sm:py-6 md:py-8">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Categories */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 pb-4 hide-scrollbar"
        >
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex-none w-[110px] sm:w-[130px] md:w-[150px] flex flex-col items-center"
            >
              <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden shadow-md">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
