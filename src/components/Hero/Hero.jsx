// import React from "react";
// import "./Hero.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// // Import required modules
// import { Navigation, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="hero__slider--section">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         spaceBetween={30}
//         speed={800}
//         className="hero__slider--inner hero__slider--activation"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div className="hero__slider--items home1__slider--bg">
//             <div className="container-fluid">
//               <div className="hero__slider--items__inner">
//                 <div className="row">
//                   <div className="col">
//                     <div className="slider__content">
//                       <h2 className="slider__content--maintitle h1">
//                         Dressing Dreams <br />
//                         Stitching Stories
//                       </h2>
//                       <p className="slider__content--desc desc2 mb-40">
//                         Up To 40% Off Final Sale Items. <br />
//                         Caught in the Moment!
//                       </p>
//                       <Link className="primary__btn slider__btn" to="/mens">
//                         Show Collection
//                         <svg
//                           className="primary__btn--arrow__icon"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M6.5 12H17.5M17.5 12L12.5 7M17.5 12L12.5 17"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         {/* <SwiperSlide>
//           <div className="hero__slider--items home1__slider--bg three">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-lg-6 offset-lg-6">
//                   <div className="hero__slider--items__inner">
//                     <div className="slider__content">
//                       <h2 className="slider__content--maintitle h1">
//                         Threads That <br />
//                         Define You.
//                       </h2>
//                       <p className="slider__content--desc desc2 mb-40">
//                         Up To 40% Off Final Sale Items. <br />
//                         Caught in the Moment!
//                       </p>
//                       <Link className="primary__btn slider__btn" to="/womens">
//                         Show Collection
//                         <svg
//                           className="primary__btn--arrow__icon"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M6.5 12H17.5M17.5 12L12.5 7M17.5 12L12.5 17"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide> */}

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <div className="hero__slider--items home1__slider--bg two">
//             <div className="container-fluid">
//               <div className="hero__slider--items__inner">
//                 <div className="row">
//                   <div className="col">
//                     <div className="slider__content">
//                       <h2 className="slider__content--maintitle h1">
//                         Seamless Fashion <br />
//                         Tailored for All
//                       </h2>
//                       <p className="slider__content--desc desc2 mb-40">
//                         Up To 40% Off Final Sale Items. <br />
//                         Caught in the Moment!
//                       </p>
//                       <Link className="primary__btn slider__btn" to="/womens">
//                         Show Collection
//                         <svg
//                           className="primary__btn--arrow__icon"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M6.5 12H17.5M17.5 12L12.5 7M17.5 12L12.5 17"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//       <div className="swiper__nav--btn swiper-button-next"></div>
//       <div className="swiper__nav--btn swiper-button-prev"></div>
//     </section>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from 'react';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import './Hero.css';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const slides = [
//     {
//       image: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       title: "Summer Collection",
//       subtitle: "2025",
//       description: "Discover the latest trends in summer fashion",
//       link: "/summer"
//     },
//     {
//       image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       title: "Luxury Essentials",
//       subtitle: "Premium",
//       description: "Elevate your wardrobe with luxury pieces",
//       link: "/luxury"
//     },
//     {
//       image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       title: "Urban Style",
//       subtitle: "Street",
//       description: "Contemporary urban fashion for modern lifestyle",
//       link: "/urban"
//     }
//   ];

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const { innerWidth, innerHeight } = window;
    
//     setMousePosition({
//       x: (clientX - innerWidth / 2) / innerWidth,
//       y: (clientY - innerHeight / 2) / innerHeight
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="hero-section" onMouseMove={handleMouseMove}>
//       <div className="hero-slider">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               transform: index === currentSlide 
//                 ? `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.1)`
//                 : 'none'
//             }}
//           >
//             <div className="hero-overlay"></div>
//             <div className="hero-content">
//               <div className="hero-text-content">
//                 <span className="hero-eyebrow">Featured Collection</span>
//                 <h1 className="hero-title">
//                   {slide.title}
//                   <span className="hero-subtitle">{slide.subtitle}</span>
//                 </h1>
//                 <p className="hero-description">{slide.description}</p>
//                 <a href={slide.link} className="hero-button">
//                   Explore Now
//                   <ArrowRight className="button-icon" size={20} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="hero-controls">
//         <button className="hero-nav prev" onClick={prevSlide} aria-label="Previous slide">
//           <ChevronLeft size={24} />
//         </button>
//         <div className="hero-indicators">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`indicator ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//         <button className="hero-nav next" onClick={nextSlide} aria-label="Next slide">
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';
import h1_img from '../Assets/h-1.png';
import h2_img from '../Assets/h2.jpeg';
import h3_img from '../Assets/h-3.png';
import h4_img from '../Assets/h-4.png';
import h5_img from '../Assets/h-5.png';
import h6_img from '../Assets/h-6.jpeg';
import h7_img from '../Assets/h-7.png';
import h8_img from '../Assets/h-8.jpeg';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      image: h1_img,
      title: "Summer Collection",
      subtitle: "2025",
      description: "Discover the latest trends in summer fashion",
      link: "/summer"
    },
    {
      image: h2_img,
      title: "Luxury Essentials",
      subtitle: "Premium",
      description: "Elevate your wardrobe with luxury pieces",
      link: "/luxury"
    },
    {
      image: h3_img,
      title: "Women's Traditional",
      subtitle: "Heritage",
      description: "Timeless traditional attire celebrating cultural elegance",
      link: "/women-traditional"
    },
    {
      image: h4_img,
      title: "Men's Traditional",
      subtitle: "Classic",
      description: "Sophisticated traditional wear for the modern gentleman",
      link: "/men-traditional"
    },
    // {
    //   image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //   title: "Indian Heritage",
    //   subtitle: "Ethnic",
    //   description: "Exquisite Indian traditional wear for special occasions",
    //   link: "/indian-traditional"
    // },
    {
      image: h5_img,
      title: "Festive Collection",
      subtitle: "Celebration",
      description: "Stunning traditional ensembles for festive celebrations",
      link: "/festive"
    },
    {
      image: h6_img,
      title: "Bridal Collection",
      subtitle: "Wedding",
      description: "Elegant bridal wear for your special day",
      link: "/bridal"
    },
    {
      image: h7_img,
      title: "Cultural Fusion",
      subtitle: "Modern Heritage",
      description: "Contemporary designs with traditional elements",
      link: "/fusion"
    },
    {
      image: h8_img,
      title: "Urban Style",
      subtitle: "Street",
      description: "Contemporary urban fashion for modern lifestyle",
      link: "/urban"
    }
  ];

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    setMousePosition({
      x: (clientX - innerWidth / 2) / innerWidth,
      y: (clientY - innerHeight / 2) / innerHeight
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide 
                ? `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.1)`
                : 'none'
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-text-content">
                <span className="hero-eyebrow">Featured Collection</span>
                <h1 className="hero-title">
                  {slide.title}
                  <span className="hero-subtitle">{slide.subtitle}</span>
                </h1>
                <p className="hero-description">{slide.description}</p>
                <a href={slide.link} className="hero-button">
                  Explore Now
                  <ArrowRight className="button-icon" size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-controls">
        <button className="hero-nav prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button className="hero-nav next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;