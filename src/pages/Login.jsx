// import React, { useEffect, useState, useContext } from "react";
// import "../CSS/LoginSignup.css";
// import axios from "axios";
// import { BASEURL } from "../config"; // Your API base URL
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook
// import { AuthContext } from "../context/AuthContext"; // Import AuthContext
// import { toast } from "react-toastify"; // Import toast from react-toastify
// import "react-toastify/dist/ReactToastify.css"; // Import styles for react-toastify

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // To handle error messages

//   const { login, user } = useContext(AuthContext); // Use login function from AuthContext
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   // Function to handle navigation to the signup page
//   const handleSignupClick = () => {
//     navigate("/signup"); // Navigate to the signup page
//   };

//   const handlePasswordReset = () => {
//     navigate("/password-reset"); // Navigate to the password reset page
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setError(""); // Clear previous error messages

//     try {
//       // Send POST request to backend to authenticate the user
//       const response = await axios.post(BASEURL + "/api/users/login", {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         const { user, token } = response.data;

//         // Use AuthContext login function to store user and token
//         login(user, token);

//         setEmail("");
//         setPassword("");

//         // Show success message
//         toast.success("Login successful!");

//         // Navigate based on user role
//         if (user.role === "admin") {
//           navigate("/admin"); // Navigate to admin dashboard
//         } else {
//           navigate("/"); // Navigate to home page for non-admin users
//         }
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       const message =
//         error.response && error.response.data && error.response.data.message
//           ? error.response.data.message
//           : "Invalid email or password. Please try again.";

//       setError(message); // Set error message

//       // Show error toast
//       toast.error(message);
//     }
//   };

//   useEffect(() => {
//     // Check if the user is already logged in and redirect them if needed
//     const token = localStorage.getItem("token");

//     // Check if token exists and if the user is not logged in
//     if (token && !user) {
//       navigate("/"); // Redirect to home if already logged in
//     }
//   }, [navigate, user]); // Re-run if `user` or `navigate` changes

//   return (
//     <form onSubmit={onSubmitHandler}>
//       <div className="loginsignup">
//         <div className="loginsignup-container">
//           <h1>Login</h1>
//           <div className="loginsignup-fields">
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email Address"
//               required
//             />
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               required
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>} {/* Show error message if any */}
//           <button type="submit">Continue</button>
//           <p className="loginsignup-login">
//             Don't have an account ?{" "}
//             <span className="loginsignup-link" onClick={handleSignupClick}>
//               Sign up here
//             </span>
//           </p>
//           <p className="loginsignup-login">
//             Forgot Password{" "}
//             <span
//               className="loginsignup-link"
//               onClick={handlePasswordReset}
//             >
//               Click here
//             </span>
//           </p>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Login;


// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { BASEURL } from "../config";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { toast } from "react-toastify";
// import "../CSS/Login.css";

// const Login = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

// const { login } = useContext(AuthContext);
// const navigate = useNavigate();

// const handleSignupClick = () => {
//   navigate("/signup");
//   onClose();
// };

// const handlePasswordReset = () => {
//   navigate("/password-reset");
//   onClose();
// };

// const onSubmitHandler = async (event) => {
//   event.preventDefault();
//   setError("");

//   try {
//     const response = await axios.post(BASEURL + "/api/users/login", {
//       email,
//       password,
//     });

//     if (response.status === 200) {
//       const { user, token } = response.data;
//       login(user, token);
//       setEmail("");
//       setPassword("");
//       toast.success("Login successful!");
//       onClose();

//       if (user.role === "admin") {
//         navigate("/admin");
//       }
//     }
//   } catch (error) {
//     console.error("Login Error:", error);
//     const message =
//       error.response?.data?.message || "Invalid email or password. Please try again.";
//     setError(message);
//     toast.error(message);
//   }
// };

//   if (!isOpen) return null;

//   return (
//     <div className="login-popup-overlay">
//       <div className="login-popup-content">
//         <button className="login-popup-close" onClick={onClose}>&times;</button>
//         <form onSubmit={onSubmitHandler}>
//           <div className="login-popup-container">
//             <h1>Login</h1>
//             <div className="login-popup-fields">
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 placeholder="Email Address"
//                 required
//               />
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             {error && <p className="error-message">{error}</p>}
//             <button type="submit">Continue</button>
//             <p className="login-popup-links">
//               Don't have an account?{" "}
//               <span onClick={handleSignupClick}>Sign up here</span>
//             </p>
//             <p className="login-popup-links">
//               Forgot Password?{" "}
//               <span onClick={handlePasswordReset}>Click here</span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useContext } from 'react';
import axios from "axios";
import { BASEURL } from "../config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "../CSS/Login.css";

function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSignupClick = () => {
    navigate("/signup");
    onClose();
  };

  const handlePasswordReset = () => {
    navigate("/password-reset");
    onClose();
  };

  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   setError("");

  //   try {
  //     // This is a mock success. In a real app, you would call your API
  //     console.log("Login attempted with:", { email, password });

  //     // Simulating successful login
  //     setEmail("");
  //     setPassword("");
  //     onClose();
  //   } catch (error) {
  //     console.error("Login Error:", error);
  //     setError("Invalid email or password. Please try again.");
  //   }
  // };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await axios.post(BASEURL + "/api/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { user, token } = response.data;
        login(user, token);
        setEmail("");
        setPassword("");
        toast.success("Login successful!");
        onClose();

        if (user.role === "admin") {
          navigate("/admin");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      const message =
        error.response?.data?.message || "Invalid email or password. Please try again.";
      setError(message);
      toast.error(message);
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed pt-20 inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-fadeIn mt-10">
      <div
        className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl mx-auto flex flex-col md:flex-row animate-slideIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section - Moved to left side */}
        <div className="hidden md:block md:w-1/2 bg-red-500 relative h-full min-h-[500px]">
          <img
            src="https://img.freepik.com/premium-photo/smiling-character-holding-glowing-shopping-icon-surrounded-by-products-solid-background_720722-34520.jpg?ga=GA1.1.1629432222.1745324259&semt=ais_hybrid&w=740"
            alt="Login Background"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0  p-8">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mt-7">Login</h3>
              <p className="max-w-xs mx-auto text-2xl font-bold mt-20 ">
                Get access to your Orders, Wishlist and Recommendations
              </p>
            </div>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="relative w-full md:w-1/2 p-8 flex flex-col">

          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-orange-500 text-center">Welcome Back</h2>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-orange-500 hover:text-red-500 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

          </div>

          {/* {error && (
                <div className="p-3 text-red-600   ">
                  {error}
                </div>
              )} */}

          <div className="space-y-6"> {/* <-- this controls main vertical gap */}
            <p className="text-gray-700 text-lg mb-20">
              Please sign in to your account to continue
            </p>

            

            <form onSubmit={onSubmitHandler} className="space-y-5 flex-grow">
              {/* Each field */}
              <div className="login-popup-fields space-y-2 -mt-5">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                  Email Address
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="login-popup-fields space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold mt-5 py-3 px-4 rounded-lg transition-colors duration-300 h-[50px] md:h-[45px]"
              >
                Sign In
              </button>

            </form>
          </div>


          <div className="mt-2 space-y-2">
            <p className="text-sm text-gray-700 text-center">
              Don't have an account?{" "}
              <button
                onClick={handleSignupClick}
                className="text-orange-500 hover:text-orange-500 font-semibold transition-colors duration-300"
              >
                Sign up here
              </button>
            </p>
            <p className="text-sm text-gray-700 text-center">
              Forgot Password?{" "}
              <button
                onClick={handlePasswordReset}
                className="text-orange-500 hover:text-orange-700 font-semibold transition-colors duration-300"
              >
                Reset here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;