import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
import ImagesList from "../data/ImagesList";
import ImagesCard from "../components/ImagesCard";
const Home = () => {
  return (
    <div>
      {" "}
      <section className="min-h-[65vh] md:min-h-[70vh] flex justify-center pt-10">
        <div className="relative w-full max-w-7xl h-[65vh] md:h-[70vh] overflow-hidden rounded-2xl flex justify-center items-center">
          <img
            src={banner}
            alt="Bookstore Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center px-6 md:px-16 lg:px-24">
            <div className="flex flex-col items-start space-y-4 max-w-xl">
              <p className="text-xl md:text-2xl text-white uppercase tracking-wide">
                summer collection 2026
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Welcome to Our Modern Shop
              </h1>
              <p className="max-w-xl text-base md:text-lg text-white">
                Discover our curated selection of premium essentials designed
                for your modern lifestyle.
              </p>
              <div className="group text-white text-lg mt-5 w-max">
                <Link
                  to="/bestsellers"
                  className="bg-primary hover:bg-secondary-hover px-6 py-4 rounded-lg inline-block"
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
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center items-stretch">
          {ImagesList.map((image) => {
            return (
              <ImagesCard
                key={image.id}
                image={image.image}
                name={image.name}
                text={image.text}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
