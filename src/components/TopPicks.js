import React from "react"
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
  return (
    <>
    <h1 className="text-orange-500 font-bold text-2xl text-center py-2 ">Top Picks</h1>
    <div className="hidden lg:flex max-w[1520px] m-auto py-2 px-2 ">
      <Splide options={{perPage: 3, drag: 'free', gap: ".5rem", type: 'loop', rewind: true, rewindByDrag: true}}>
      {
        topPicks.map((item) => {
          return (
            <SplideSlide key={item.id}>
            <div className="rounded-3xl relative cursor-pointer hover:scale-100">
              <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white cursor-pointer">
                <p className="px-2 font-bold text-2xl ">{item.title} </p>
                <p className="px-2">{item.price}</p>
                <button className="border-dotted border-white mx-2 absolute bottom-4 hover:bg-white/30 ">Add To Cart</button>
              </div>
              <img className="h-[300px] w-full object-cover rounded-3xl cursor-pointer hover:scale-100 ease-out duration-300 "
              src={item.img} alt={item.title} />
            </div>
            </SplideSlide>
          )
        })
      }
      </Splide>
    </div>
    </>
  )
};

export default TopPicks;
