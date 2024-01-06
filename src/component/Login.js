import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const toggleSignInform = () => {
    setIsSignInform(!isSignInform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background image"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInform ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInform &&
         (<input
          type="text"
          placeholder="Name"
          className="p-2 my-4 w-full bg-gray-600 rounded"
        />
        )} 
        
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-600 rounded"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-600  rounded"
        />
        <button className="p-2 my-6 w-full bg-red-700 rounded">
          {isSignInform ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
          {isSignInform
            ? "New to Netflix? Sign Up Now"
            : "Already Registered Sign In Now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
