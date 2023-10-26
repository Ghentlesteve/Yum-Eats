import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-[1520px] m-auto text-white px-4 bg-[#24262b]">
      <div className="flex flex-col sm:flex-row items-center justify-between ">
        <div className="lg:cols-span-2 my-4">
          <h1>Need advice on how to increase your flow?</h1>
          <p>sign Up to join our newsletter and stay up to date</p>
        </div>
        <div className="my-4  ">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input
              className="p-3 flex w-full rounded-md text-black"
              placeholder="Enter Email"
              type="email"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none ">
              Notify Me
            </button>
          </div>
          <p>We are concerned about the security of your data, Read{" "}
          <span className="text-[#00df9a]">Privacy Policy</span></p>
        </div>
        <hr className="my-6 bg-gray-700 gark:bg-gray-700 border-gray-500  "/>
      </div>
    </div>
  );
};

export default NewsLetter;
