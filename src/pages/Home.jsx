import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
const Home = () => {
  return (
    <div>
      {" "}
      <section className="min-h-screen flex justify-center pt-10   ">
        <div className="relative w-full max-w-7xl h-[70vh] overflow-hidden rounded-2xl  flex justify-center items-center ">
          <img
            src={banner}
            alt="Bookstore Banner"
            className=" inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center pl-40   ">
            <div className=" flex flex-col items-start space-y-4   ">
              <p className="text-2xl text-white uppercase tracking-wide ">
                summer collection 2026
              </p>
              <h1 className="text-4xl font-bold text-white ">
                Welcome to Our MondernShop
              </h1>
              <p className=" max-w-xl text-lg text-white ">
                Discover our curated selection of premium essentials designed
                for your modern lifestyle.
              </p>
              <div className=" group  text-white text-lg  mt-5 w-max ">
                <Link
                  to="/bestsellers"
                  className=" bg-primary hover:bg-secondary-hover  p-4 inline-block px-6 py-4 rounded-lg cursor-pointer"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-100  space-y-2 px-6 md:px-12 lg:px-20 ">
        <h1 className="font-bold text-2xl">Curated Categories</h1>
        <p>Refined aesthetics for every corner of your life</p>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
