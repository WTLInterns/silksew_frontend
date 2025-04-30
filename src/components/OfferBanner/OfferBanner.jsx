// import { ShoppingCart, ThumbsUp, Package, Shield, Headphones } from "lucide-react"
// import "../OfferBanner/OfferBanner.css"

// export default function SpecialFeatures() {
//   const features = [
//     {
//       icon: <ShoppingCart className="feature-icon" />,
//       subtitle: "FREE DELIVERY",
//       title: "Free Delivery",
//     },
//     {
//       icon: <ThumbsUp className="feature-icon" />,
//       subtitle: "100% CUSTOMER",
//       title: "Feedbacks",
//     },
//     {
//       icon: <Package className="feature-icon" />,
//       subtitle: "3 DAYS",
//       title: "For Free Return",
//     },
//     {
//       icon: <Shield className="feature-icon" />,
//       subtitle: "PAYMENT",
//       title: "Secure System",
//     },
//     {
//       icon: <Headphones className="feature-icon" />,
//       subtitle: "24/7",
//       title: "Online Supports",
//     },
//   ]

//   return (
//     <div className="features-container">
//       <div className="features-header">
//         <h2>Special Features</h2>
//         <p>Get special services from our shop.</p>
//       </div>
//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div key={index} className="feature-card">
//             <div className="icon-wrapper">{feature.icon}</div>
//             <div className="feature-content">
//               <span className="feature-subtitle">{feature.subtitle}</span>
//               <h3 className="feature-title">{feature.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



// import { useEffect, useRef } from "react";
// import { ShoppingCart, ThumbsUp, Package, Shield, Headphones } from "lucide-react";
// import "../OfferBanner/OfferBanner.css"

// export default function SpecialFeatures() {
//   const featuresRef = useRef(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const featureCards = document.querySelectorAll(".feature-card");
//     featureCards.forEach((card, index) => {
//       card.style.transitionDelay = `${index * 100}ms`;
//       observer.observe(card);
//     });

//     return () => {
//       featureCards.forEach((card) => observer.unobserve(card));
//     };
//   }, []);

//   const features = [
//     {
//       icon: <ShoppingCart className="feature-icon" />,
//       subtitle: "FREE DELIVERY",
//       title: "Free Delivery",
//       description: "On all orders above $50"
//     },
//     {
//       icon: <ThumbsUp className="feature-icon" />,
//       subtitle: "100% CUSTOMER",
//       title: "Feedbacks",
//       description: "Rated excellent by our users"
//     },
//     {
//       icon: <Package className="feature-icon" />,
//       subtitle: "3 DAYS",
//       title: "For Free Return",
//       description: "No questions asked policy"
//     },
    // {
    //   icon: <Shield className="feature-icon" />,
    //   subtitle: "PAYMENT",
    //   title: "Secure System",
    //   description: "Protected by 256-bit encryption"
    // },
    // {
    //   icon: <Headphones className="feature-icon" />,
    //   subtitle: "24/7",
    //   title: "Online Supports",
    //   description: "Always here to help you"
    // },
//   ];

//   return (
//     <div className="features-container" ref={featuresRef}>
//       <div className="features-backdrop"></div>
//       <div className="features-content">
//         <div className="features-header">
//           <span className="features-tag">What We Offer</span>
//           <h2>Special Features</h2>
//           <p>Get exclusive services from our premium shop</p>
//           <div className="header-underline"></div>
//         </div>
        
//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <div key={index} className="feature-card">
//               <div className="feature-inner">
//                 <div className="icon-wrapper">
//                   <div className="icon-background"></div>
//                   {feature.icon}
//                 </div>
//                 <div className="feature-content">
//                   <span className="feature-subtitle">{feature.subtitle}</span>
//                   <h3 className="feature-title">{feature.title}</h3>
//                   <p className="feature-description">{feature.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import { ShoppingCart, ThumbsUp, Package, Shield, Headphones } from "lucide-react";
import "./OfferBanner.css";

export default function SpecialFeatures() {
  const featuresRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 150}ms`;
      observer.observe(item);
    });

    return () => {
      featureItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const features = [
    {
      icon: <ShoppingCart className="feature-icon" />,
      title: "Free Delivery",
      description: "On all orders above $50"
    },
    {
      icon: <Package className="feature-icon" />,
      subtitle: "3 DAYS",
      title: "For Free Return",
       description: "No questions asked policy"
    },
    {
      icon: <Shield className="feature-icon" />,
      subtitle: "PAYMENT",
      title: "Secure System",
      description: "Protected by 256-bit encryption"
    },
    {
      icon: <Headphones className="feature-icon" />,
      subtitle: "24/7",
      title: "Online Supports",
      description: "Always here to help you"
    },
  ];

  return (
    <div className="special-features-container" ref={featuresRef}>
      <div className="special-features-content">
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-content">
                <div className="icon-diamond">
                  {feature.icon}
                </div>
                <h3 className="feature-title" style={{color:"whitesmoke"}}>{feature.title}</h3>
                <p className="feature-description" style={{color:"whitesmoke"}}>{feature.description}</p>
              </div>
              {index < features.length - 1 && (
                <div className="connector">
                  <div className="dotted-line"></div>
                  <div className="arrow"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}