// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react"
// import "./NewCollections.css"
// import axios from "axios"
// import { Link } from "react-router-dom"

// const NewCollections = () => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState("")
//   const [showAll, setShowAll] = useState(false)

//   const shortenName = (name) => (name.length > 25 ? name.substring(0, 25) + "..." : name)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://api.silksew.com/api/products/list")
//         const fetchedProducts = Array.isArray(response.data) ? response.data : response.data.products
//         setProducts(fetchedProducts)
//       } catch (err) {
//         setError("Failed to load products.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   const getImage = (images, availableColors) => {
//     if (images && images.length > 0 && availableColors && availableColors.length > 0) {
//       try {
//         for (const color of availableColors) {
//           const parsedImages = JSON.parse(images[0])
//           if (parsedImages[color.name] && parsedImages[color.name].length > 0) {
//             return parsedImages[color.name][0]
//           }
//         }
//         const parsedImages = JSON.parse(images[0])
//         const firstAvailableColor = Object.keys(parsedImages)[0]
//         if (parsedImages[firstAvailableColor] && parsedImages[firstAvailableColor].length > 0) {
//           return parsedImages[firstAvailableColor][0]
//         }
//       } catch (error) {
//         console.error("Error parsing image JSON:", error)
//       }
//     }
//     return "https://via.placeholder.com/150"
//   }

//   if (loading) return <div className="nc-loading">Loading...</div>
//   if (error) return <div className="nc-error">{error}</div>

//   const displayedProducts = showAll ? products : products.slice(0, 8)

//   return (
//     <section className="nc-container">
//       <h2 className="nc-title">New Collections</h2>
//       <div className="nc-gradient-line"></div>
//       <div className="nc-product-grid">
//         {displayedProducts.length > 0 ? (
//           displayedProducts.map((item, i) => (
//             <article className="nc-product-card" key={i}>
//               <Link to={`/product/${item._id}`} state={{ product: item }} className="nc-product-link">
//                 <img
//                   src={getImage(item.images, item.availableColors) || "/placeholder.svg"}
//                   alt={item.name}
//                   className="nc-product-image"
//                 />
//               </Link>
//               <h3 className="nc-product-name">{shortenName(item.name)}</h3>
//               <div className="nc-product-prices">
//                 <span className="nc-price-new">Rs.{item.price.toFixed(2)}</span>
//                 {item.oldPrice && <span className="nc-price-old">Rs.{item.oldPrice.toFixed(2)}</span>}
//               </div>
//               <Link to={`/product/${item._id}`} state={{ product: item }} className="nc-view-btn">
//                 View Product
//               </Link>
//             </article>
//           ))
//         ) : (
//           <p className="nc-no-products">No products available.</p>
//         )}
//       </div>

//       {/* <div className="nc-toggle-view">
//         {!showAll && products.length > 8 && (
//           <button onClick={() => setShowAll(true)} className="nc-view-more">
//             View More &#11015;
//           </button>
//         )}
//         {showAll && products.length > 8 && (
//           <button onClick={() => setShowAll(false)} className="nc-view-more">
//             Show Less &#11014;
//           </button>
//         )}
//       </div> */}
//     </section>
//   )
// }

// export default NewCollections


/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import "./NewCollections.css"
import axios from "axios"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const NewCollections = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

    const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  }

  const shortenName = (name) => (name.length > 25 ? name.substring(0, 25) + "..." : name)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://api.silksew.com/api/products/list")
        const fetchedProducts = Array.isArray(response.data) ? response.data : response.data.products
        setProducts(fetchedProducts)
      } catch (err) {
        setError("Failed to load products.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const getImage = (images, availableColors) => {
    if (images && images.length > 0 && availableColors && availableColors.length > 0) {
      try {
        for (const color of availableColors) {
          const parsedImages = JSON.parse(images[0])
          if (parsedImages[color.name] && parsedImages[color.name].length > 0) {
            return parsedImages[color.name][0]
          }
        }
        const parsedImages = JSON.parse(images[0])
        const firstAvailableColor = Object.keys(parsedImages)[0]
        if (parsedImages[firstAvailableColor] && parsedImages[firstAvailableColor].length > 0) {
          return parsedImages[firstAvailableColor][0]
        }
      } catch (error) {
        console.error("Error parsing image JSON:", error)
      }
    }
    return "https://via.placeholder.com/150"
  }

  if (loading) return <div className="nc-loading">Loading...</div>
  if (error) return <div className="nc-error">{error}</div>

  const handleViewProduct = (product) => {
    navigate(`/product/${product._id}`, { state: { product } });
  };

  return (
    <section className="nc-container">
      <h2 className="nc-title" style={{}}>New Collections</h2>
      <div className="nc-gradient-line"></div>
      <div className="nc-carousel-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="nc-carousel"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="nc-carousel-dots"
          itemClass="nc-carousel-item"
        >
          {products.map((item, i) => (
            <article className="nc-product-card" key={i}>
              <div className="nc-product-image-container">
                <img
                  src={getImage(item.images, item.availableColors) || "/placeholder.svg"}
                  alt={item.name}
                  className="nc-product-image"
                />
                {/* <div className="nc-just-in">JUST IN</div> */}
                {/* <button className="nc-favorite-button">
                  <FaHeart />
                </button> */}
              </div>
              <div className="nc-product-details">
                <h3 className="nc-brand-name">{item.brand || "BRAND"}</h3>
                <p className="nc-product-name">{shortenName(item.name)}</p>
                <div className="nc-price-container">
                  <span className="nc-current-price">₹ {item.price}</span>
                  {item.oldPrice && <span className="nc-original-price">₹ {item.oldPrice}</span>}
                </div>
                {/* <Link to={`/product/${item._id}`} state={{ product: item }} className="nc-view-btn">
                  View Product
                </Link> */}
                 <button 
                  onClick={() => handleViewProduct(item)} 
                  className="view-product-btn"
                >
                  View Product
                </button>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default NewCollections

