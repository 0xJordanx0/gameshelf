import { useState } from "react";
import videoCardData from "../assets/giftcardsData/videocardData.json";
const TrendingVideoGames = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 mt-12 mb-10">
      <div className="flex items-center justify-between my-8">
        <h2 className=" lg:text-[1.8rem] text-[1.4rem]    font-semibold">
          Trending Gift Cards
        </h2>
      </div>
      <div className="overflow-hidden">
        <div
          className="carousel rounded-lg gap-x-4 transition-transform duration-500 ease-in-out flex whitespace-nowrap"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {videoCardData.map((item) => (
            <div
              key={item.id}
              id={`video${item.id}`}
              className="carousel-item w-[48%] sm:w-[23%] lg:w-[24%] flex flex-col relative"
            >
              <div className="relative">
                <img src={item.src} alt="giftcardIcon" />
                <p className="absolute lg:text-sm  md:right-4 sm:top-3 top-2 right-3  md:text-[13px] md:p-[4px] rounded-md bg-gray-50/25 sm:p-[3px] sm:text-[11px] p-[4px] text-[10px] shadow-2xl bg-gradient-to-b sm:text-xs text-white text-center">
                  {item.offers} offers
                </p>
              </div>
              <span className="text-black text-sm mt-2 font-medium w-full text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center sm:block hidden">
        <button
          onClick={handlePrevPage}
          className={`trending-page1 w-[28px] h-[4px] rounded-2xl mr-1 ${
            currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
          } `}
          id="prevPage"
        />
        <button
          onClick={handleNextPage}
          className={`trending-page2 w-[28px] h-[4px] rounded-2xl ${
            currentSlide === 0 ? "bg-[#888888]" : "bg-[#f03827]"
          } `}
          id="nextPage"
        />
      </div>
    </div>
  );
};

export default TrendingVideoGames;
