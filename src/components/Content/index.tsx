import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkMobile from "../../assets/mobile/checkpoint.svg";
import { animated, useSpring } from "react-spring";
export const Content = () => {
  const customers = useSpring({ customers: 10245, from: { customers: 0 } });
  const cards = useSpring({ cards: 12045, from: { cards: 0 } });

  return (
    <>
      <section className="md:flex md:flex-row md:justify-between">
        <div className="md:w-[20%] ml-[70px] mr-[54px] text-bold bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-md flex flex-col items-center">
          <div className="mt-16 gap-8 flex items-start">
            <FaUser size={"22px"} className="mt-[12px]" />
            <div className="text-26">
              <animated.div>
                {customers.customers.to((val) => Math.floor(val))}
              </animated.div>
              <p className="text-13 font-semibold mb-[36px] md:text-16">
                Customers
              </p>
            </div>
          </div>
          <div className="flex items-start mb-16 gap-8">
            <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
            <div className="text-26">
              <animated.div>
                {cards.cards.to((val) => Math.floor(val))}
              </animated.div>
              <p className="text-13 font-semibold md:text=16">Cards Issued</p>
            </div>
          </div>
        </div>
        <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:mt-0 md:ml-[20rem]">
          <div className="flex gap-8 ml-[70px] mr-[29px] items-center mb-[50px]">
            <img src={checkMobile} alt="" />
            <p>Card reports sent to your phone every weeks.</p>
          </div>
          <div className="flex gap-8 ml-[70px] mr-[29px] items-center mb-[50px]">
            <img src={checkMobile} alt="" />
            <p>No external fees.</p>
          </div>
          <div className="flex gap-8 ml-[70px] mr-[29px] items-center mb-[50px]">
            <img src={checkMobile} alt="" />
            <p>Card reports sent to your phone every weeks</p>
          </div>
        </div>
      </section>
    </>
  );
};
