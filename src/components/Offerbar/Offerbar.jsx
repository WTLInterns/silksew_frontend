// import { useState, useEffect } from "react"

// import "../Offerbar/Offerbar.css"

// export default function SaleTimer() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 24,
//     minutes: 30,
//     seconds: 45,
//   })

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const endDate = new Date("2025-02-28").getTime()
//       const now = new Date().getTime()
//       const difference = endDate - now

//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((difference % (1000 * 60)) / 1000),
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

//   const announcements = [
//     "Special Offer! 🎉",
//     "Limited Time Deal ⚡",
//     "Don't Miss Out! 🎯",
//     "Shop Now! 🛍️",
//     "Best Prices Ever! 💫",
//   ]

//   return (
//     <div className="sale-wrapper">
//       <div className="sale-container">
//         <div className="timer-section">
//           <div className="sale-text blink">Sale is Live !!!</div>
//           <div className="countdown">
//             <div className="time-unit">
//               <span className="number">{String(timeLeft.days).padStart(2, "0")}</span>
//               <span className="label">days</span>
//             </div>
//             <div className="time-unit">
//               <span className="number">{String(timeLeft.hours).padStart(2, "0")}</span>
//               <span className="label">hours</span>
//             </div>
//             <div className="time-unit">
//               <span className="number">{String(timeLeft.minutes).padStart(2, "0")}</span>
//               <span className="label">min</span>
//             </div>
//             <div className="time-unit">
//               <span className="number">{String(timeLeft.seconds).padStart(2, "0")}</span>
//               <span className="label">sec</span>
//             </div>
//           </div>
//         </div>
//         <div className="marquee-section">
//           <div className="marquee-content">
//             {[...announcements, ...announcements, ...announcements].map((text, index) => (
//               <span key={index} className="marquee-item">
//                 {text}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Offerbar/Offerbar.css"

export default function SaleTimer() {
  const [offer, setOffer] = useState(null);  // Initialize offer state
  const [totalDays, setTotalDays] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 24,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const endDate = new Date("2025-02-28").getTime()
      const now = new Date().getTime()
      const difference = endDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const announcements = [
    "Special Offer! 🎉",
    "Limited Time Deal ⚡",
    "Don't Miss Out! 🎯",
    "Shop Now! 🛍️",
    "Best Prices Ever! 💫",
  ]


  // Fetch the offer data from the backend
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const res = await axios.get("https://api.silksew.com/api/offer/get-offer");
        setOffer(res.data.offer);
        console.log("Offer response:", res.data.offer);
      } catch (err) {
        console.error("Error fetching offer:", err);
      }
    };

    fetchOffer();
  }, []);

  //  const getTotalDays = () => {
  //   if (!offer?.startDate || !offer?.endDate) {
  //     console.log("Offer startDate or endDate missing");
  //     return null;
  //   }

  //     const start = new Date(offer.startDate);  
  // const end = new Date(offer.endDate);      

  //   console.log("Start Date:", start, "End Date:", end);



  //   return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  // };

  // // Log the total days to debug
  // useEffect(() => {
  //   if (offer) {
  //     const totalDays = getTotalDays();
  //     console.log("Total Days:", totalDays);
  //   }
  // }, [offer]);  // Dependency array ensures this effect runs after `offer` is set


  useEffect(() => {
    if (offer?.startDate && offer?.endDate) {
      const start = new Date(offer.startDate);
      const end = new Date(offer.endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setTotalDays(days);
    }
  }, [offer]);

  const formatOfferDates = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const options = { day: "numeric", month: "short" }; // 'short' => Jan, Feb, etc.

    const formattedStart = startDate.toLocaleDateString("en-GB", options); // e.g., 12 May
    const formattedEnd = endDate.toLocaleDateString("en-GB", options);     // e.g., 16 May

    return `${formattedStart} to ${formattedEnd}`;
  };

  return (
    <div className="sale-wrapper">
      <div className="sale-container">
        <div className="timer-section">
          <div className="sale-text blink">Sale is Live !!!</div>

          {offer?.startDate && offer?.endDate && (
            <div className="offer-date-range">
              🗓️ <strong>{formatOfferDates(offer.startDate, offer.endDate)}</strong>
            </div>
          )}

          <div className="countdown">
            <div className="time-unit">
              <span className="number">{totalDays} days {offer?.value}% OFF </span>
              {/* <span className="label">days</span> */}
            </div>
            <div className="code-section">
              <span className="number">{offer?.code}</span>
              <span className="label">CODE</span>

            

            </div>
            {/* <div className="time-unit">
              <span className="number">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="label">hours</span>
            </div>
            <div className="time-unit">
              <span className="number">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="label">min</span>
            </div>
            <div className="time-unit">
              <span className="number">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="label">sec</span>
            </div> */}
          </div>
        </div>
        <div className="marquee-section">
          <div className="marquee-content">
            {[...announcements, ...announcements, ...announcements].map((text, index) => (
              <span key={index} className="marquee-item">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

