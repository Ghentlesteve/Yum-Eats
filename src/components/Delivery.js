import React from "react";

const Delivery = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="max-w-[1520px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4 "
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className="flex flex-col justify-center ">
          <p className="font-bold text-[#00df9a] text-4xl "> Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl font-bold py-2 ">
            Limitless Convenience on-demand
          </h1>
          <p>
            Order food from your favorite restaurant and get it delivered to your door in minutes.<br/>
            Fast, convenient, and affordable delivery
            service at your fingertips.<br/>
            Everything will be delivered to you without having to leave your home.<br/>
            We deliver anything, anywhere, anytime with just a few taps.<br/>
            We are not nicknamed happiness delivery for nothing,we earned it.<br/>
            WE'RE THE DELIVERY APP THAT ALWAYS COMES THROUGH!!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
