// // RelatedProducts Component
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./RelatedProducts.css";

// const RelatedProducts = ({ subcategory, currentProductId }) => {
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();
//   const MAX_DESCRIPTION_LENGTH = 100;

//   useEffect(() => {
//     if (!subcategory || !currentProductId) return;

//     const fetchRelatedProducts = async () => {
//       try {
//         const response = await axios.get("https://api.silksew.com/api/products", {
//           params: { exclude: currentProductId },
//         });

//         if (response.data && Array.isArray(response.data.products)) {
//           const normalizedSubcategory = Array.isArray(subcategory)
//             ? subcategory[0]
//             : subcategory;
//           const filteredProducts = response.data.products.filter(
//             (product) =>
//               product.subcategory &&
//               Array.isArray(product.subcategory) &&
//               product.subcategory[0].toLowerCase() ===
//                 normalizedSubcategory.toLowerCase()
//           );

//           setRelatedProducts(filteredProducts);
//         } else {
//           setError("Error: Expected products array but got something else.");
//         }
//       } catch (error) {
//         setError("Error fetching related products.");
//       }
//     };

//     fetchRelatedProducts();
//   }, [subcategory, currentProductId]);

//   // Handle Next Slide
//   const nextSlide = () => {
//     if (currentIndex + 4 < relatedProducts.length) {
//       setCurrentIndex(currentIndex + 4);
//     }
//   };

//   const truncateDescription = (description) => {
//     if (description && description.length > MAX_DESCRIPTION_LENGTH) {
//       return description.substring(0, MAX_DESCRIPTION_LENGTH) + "...";
//     }
//     return description;
//   };

//   // Handle Previous Slide
//   const prevSlide = () => {
//     if (currentIndex - 4 >= 0) {
//       setCurrentIndex(currentIndex - 4);
//     }
//   };

//   const onProductClick = (item) => {
//     navigate(`/product/${item._id}`, { state: { product: item } });
//   };

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="related-products-container">
//       <hr />
//       <div className="carousel-container">
//         {currentIndex > 0 && (
//           <button className="carousel-btn left" onClick={prevSlide}>
//             &#10094;
//           </button>
//         )}

//         <div className="product-grid">
//           {relatedProducts.slice(currentIndex, currentIndex + 4).map((item) => {
//             const imageObj = JSON.parse(item.images[0]);
//             const imageUrl = imageObj
//               ? Object.values(imageObj)[0][0]
//               : "default_image_url";

//             return (
//               <div key={item._id} className="product-card">
//                 <img src={imageUrl} alt={item.name} className="product-image" />
//                 <div className="product-details">
//                   <h2 className="product-name">{item.name}</h2>
//                   <p className="product-description">
//                     {truncateDescription(item.description)}
//                   </p>
//                   <div className="product-price">
//                     <span className="new-price">{`Rs.${item.price}`}</span>
//                     {item.oldPrice && (
//                       <span className="old-price">{`Rs.${item.oldPrice}`}</span>
//                     )}
//                   </div>
//                   <button
//                     className="view-product-button"
//                     onClick={() => onProductClick(item)}
//                     style={{backgroundColor:" #4d0000"}}
//                   >
//                     View Product
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {currentIndex + 4 < relatedProducts.length && (
//           <button className="carousel-btn right" onClick={nextSlide}>
//             &#10095;
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;


import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RelatedProducts.css";

const RelatedProducts = ({ subcategory, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingImages, setLoadingImages] = useState({});
  const navigate = useNavigate();
  const MAX_DESCRIPTION_LENGTH = 100;

  useEffect(() => {
    if (!subcategory || !currentProductId) return;

    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get("https://api.silksew.com/api/products", {
          params: { exclude: currentProductId },
        });

        if (response.data && Array.isArray(response.data.products)) {
          const normalizedSubcategory = Array.isArray(subcategory)
            ? subcategory[0]
            : subcategory;
          const filteredProducts = response.data.products.filter(
            (product) =>
              product.subcategory &&
              Array.isArray(product.subcategory) &&
              product.subcategory[0].toLowerCase() ===
                normalizedSubcategory.toLowerCase()
          );

          setRelatedProducts(filteredProducts);
          
          // Initialize loading state for all images
          const initialLoadingState = {};
          filteredProducts.forEach(product => {
            initialLoadingState[product._id] = true;
          });
          setLoadingImages(initialLoadingState);
        } else {
          setError("Error: Expected products array but got something else.");
        }
      } catch (error) {
        setError("Error fetching related products.");
      }
    };

    fetchRelatedProducts();
  }, [subcategory, currentProductId]);

  // Handle image load complete
  const handleImageLoaded = (productId) => {
    setLoadingImages(prev => ({
      ...prev,
      [productId]: false
    }));
  };

  // Handle image error
  const handleImageError = (productId) => {
    setLoadingImages(prev => ({
      ...prev,
      [productId]: false
    }));
  };

  // Handle Next Slide
  const nextSlide = () => {
    if (currentIndex + 4 < relatedProducts.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const truncateDescription = (description) => {
    if (description && description.length > MAX_DESCRIPTION_LENGTH) {
      return description.substring(0, MAX_DESCRIPTION_LENGTH) + "...";
    }
    return description;
  };

  // Handle Previous Slide
  const prevSlide = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const onProductClick = (item) => {
    navigate(`/product/${item._id}`, { state: { product: item } });
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="related-products-container">
      <hr />
      <div className="carousel-container">
        {currentIndex > 0 && (
          <button className="carousel-btn left" onClick={prevSlide}>
            &#10094;
          </button>
        )}

        <div className="product-grid">
          {relatedProducts.slice(currentIndex, currentIndex + 4).map((item) => {
            let imageUrl = "";
            try {
              const imageObj = JSON.parse(item.images[0]);
              imageUrl = imageObj
                ? Object.values(imageObj)[0][0]
                : "https://via.placeholder.com/300x400?text=Product+Image";
            } catch (e) {
              imageUrl = "https://via.placeholder.com/300x400?text=Image+Error";
            }

            return (
              <div key={item._id} className="product-card">
                <div className="image-container">
                  {loadingImages[item._id] && (
                    <div className="image-skeleton"></div>
                  )}
                  <img 
                    src={imageUrl} 
                    alt={item.name} 
                    className={`product-image ${loadingImages[item._id] ? 'loading' : 'loaded'}`}
                    onLoad={() => handleImageLoaded(item._id)}
                    onError={() => handleImageError(item._id)}
                  />
                  <div className="image-overlay">
                    <button
                      className="quick-view-button"
                      onClick={() => onProductClick(item)}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <h2 className="product-name">{item.name}</h2>
                  <p className="product-description">
                    {truncateDescription(item.description)}
                  </p>
                  <div className="product-price">
                    <span className="new-price">{`Rs.${item.price}`}</span>
                    {item.oldPrice && (
                      <span className="old-price">{`Rs.${item.oldPrice}`}</span>
                    )}
                  </div>
                  <button
                    className="view-product-button"
                    onClick={() => onProductClick(item)}
                    style={{backgroundColor:" #4d0000"}}
                  >
                    View Product
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {currentIndex + 4 < relatedProducts.length && (
          <button className="carousel-btn right" onClick={nextSlide}>
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;