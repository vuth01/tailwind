import React from "react";
import Card from "../../assets/desktop/isocard.svg";
export const Slogan = () => {
  return (
    <>
      <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
        <div className="text-center md:col-span-1 md:col-start-2">
          <p>
            Earn <span className="dark:text-purple-300 text-white">More</span>
          </p>
          <p>Pay Less</p>
          <button
            className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-md
           hover:bg-pink-500 transition-all duration-300 text-white"
          >
            Start
          </button>
        </div>
        <div className="mt-[68px] md:absolute md:right-[-5rem]">
          <img src={Card} alt="card" />
        </div>
      </section>
    </>
  );
};
