// import React, { useRef } from 'react';
// import '../styles/CategoryCarousel.css';
// import carousalcat1 from "./Assets/carousalcat1.jpg";
// import carousalcat2 from "./Assets/carousalcat2.jpg";
// import carousalcat3 from "./Assets/carousalcat3.jpg";
// import carousalcat4 from "./Assets/carousalcat4.jpg";
// import carousalcat5 from "./Assets/carousalcat5.jpg";
// import carousalcat6 from "./Assets/carousalcat6.png";
// import carousalcat7 from "./Assets/carousalcat7.jpg";


// const categories = [
//   {
//     id: 1,
//     name: 'Bestsellers',
//     image: carousalcat1
//   },
//   {
//     id: 2,
//     name: 'Celebrity',
//     image: carousalcat2
//   },
//   {
//     id: 3,
//     name: 'Summer Fits',
//     image: carousalcat3
//   },
//   {
//     id: 4,
//     name: 'Co-Ord Sets',
//     image: carousalcat4
//   },
//   {
//     id: 5,
//     name: 'Suit Sets',
//     image: carousalcat5
//   },
//   {
//     id: 6,
//     name: 'Dresses',
//     image: carousalcat6
//   },
//   {
//     id: 7,
//     name: 'Kidswear',
//     image: carousalcat7
//   }
// ];

// const CategoryCarousel = () => {
//   const containerRef = useRef(null);

//   const scrollLeft = () => {
//     if (containerRef.current) {
//       const scrollAmount = containerRef.current.offsetWidth / 2;
//       containerRef.current.scrollBy({
//         left: -scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (containerRef.current) {
//       const scrollAmount = containerRef.current.offsetWidth / 2;
//       containerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="w-full overflow-hidden py-4 sm:py-6 md:py-8">
//       <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6">
//         {/* Categories */}
//         <div 
//           ref={containerRef}
//           className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 pb-4 hide-scrollbar"
//         >
//           {categories.map((category) => (
//             <div 
//               key={category.id} 
//               className="flex-none w-[110px] sm:w-[130px] md:w-[150px] flex flex-col items-center"
//             >
//               <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden shadow-md">
//                 <img
//                   src={category.image}
//                   alt={category.name}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//               <span className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-center">
//                 {category.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryCarousel;


import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/CategoryCarousel.css';
import carousalcat1 from "./Assets/carousalcat1.jpg";
import carousalcat2 from "./Assets/carousalcat2.jpg";
import carousalcat3 from "./Assets/carousalcat3.jpg";
import carousalcat4 from "./Assets/carousalcat4.jpeg";
import carousalcat5 from "./Assets/carousalcat5.jpeg";
import carousalcat6 from "./Assets/carousalcat6.jpeg";
import carousalcat7 from "./Assets/carousalcat7.jpg";
import carousalcat8 from "./Assets/carousalcat8.jpg"

const categories = [
  {
    id: 1,
    // name: 'Bestsellers',
    image: carousalcat1
  },
  {
    id: 2,
    image: carousalcat2
  },
  {
    id: 3,
    image: carousalcat3
  },
  {
    id: 4,
    image: carousalcat4
  },
  {
    id: 5,
    image: carousalcat5
  },
  {
    id: 6,
    image: carousalcat6
  },
  {
    id: 7,
    image: carousalcat7
  },
  {
    id: 8,
    image: carousalcat8
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
    <div className="category-carousel">
      <div className="carousel-header">
        <h2 className="section-title" style={{top:"20px"}}>Shop by Category</h2>
        <div className="carousel-controls">
          <button onClick={scrollLeft} aria-label="Scroll left">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollRight} aria-label="Scroll right">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div className="carousel-container">
        <div 
          ref={containerRef}
          className="category-container"
        >
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="category-item"
            >
              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                />
              </div>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;