import React from "react";

export default function Newsletter() {
  return (
    <div className="my-40 relative">
      <p className="z-10 opacity-10 text-center font-extrabold text-9xl absolute left-0 right-0">
        Newsletter
      </p>
      <div className="text-center space-y-8">
        <h1 className="capitalize font-extrabold text-4xl">
          Subscribe Our Newsletter
        </h1>
        <p>Get the latest information and promo offers directly</p>
        <div className="flex justify-center">
          <input
            type="text"
            className="px-8 py-2 bg-transparent  border-black border mr-4"
            placeholder="Enter Your Email Address"
          />
          <button className="px-4 py-2 bg-slate-300 w-1/6 ">Get Started</button>
        </div>
      </div>
    </div>
  );
}
