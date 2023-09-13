export default function FeaturedProduct({ featureProduct }) {
  console.log(featureProduct.created_at)
  const date = new Date(featureProduct.created_at);
  const getHour = date.getHours(date);
  const decimalConversion = featureProduct.price.toFixed(2); // Assuming featureProduct.price is a number

  return (
    <div className="flex flex-col p-3 lg:p-4 flex-co border-2 bg-[#fdfdfd] rounded-2xl  ">
      <div className="flex flex-col gap-1  ">
        <h3 className="sm:text-xs lg:text-sm xl:text-[0.95rem] text-[0.8rem] mt-1 mb-1   tracking-tighter   text-black   font-medium  line-clamp-2 ">
          {featureProduct.title}
        </h3>
      </div>
      <div className="flex justify-between lg:mt-4 mt-2 sm:mb-4  mb-3">
        <div className="sm:text-[0.7rem] lg:text-[0.8rem] text-[0.55rem]  h-fit p-0.5 px-1.5 sm:px-2 bg-gray-200   rounded-lg">
          🕞 {getHour}H
        </div>

        <p className=" text-slate-800  lg:text-[0.85rem]  sm:hidden md:text-[0.9rem] -mt-0.5 xl:text-[0.9rem]  sm:text-[0.8rem] text-[0.85rem]  font-medium">
          {decimalConversion}
          <span className="text-gray-700 md:text-[0.6rem] xl:text-[0.6rem] sm:text-[0.6rem] ml-[3px]  sm:text-sm text-[0.6rem] font-normal">
            USD
          </span>
        </p>
      </div>
      <div className="border-t   "></div>
      <div className="sm:text-[0.7rem] mb-1 text-[0.4rem] mt-1 sm-3    flex">
        <img
          className="w-8 h-8 sm:w-8 mt-1.5 sm:h-8 lg:h-9 lg:w-9 rounded-full"
          src="/userImage/3.jpg"
        />
        <div className="inline-flex justify-between items-center ml-2 flex-1">
          <div className="md:mt-2 mt-1 lg:mt-0.5">
            <h6 className="font-semibold inline-flex md:text-[10px] lg:text-[12px] text-[11px] text-gray-600 truncate">
              {featureProduct.users.username}
            </h6>
            <p className="md:text-[10px] text-[10px] lg:text-[11px] tracking-wide text-gray-500">
              Level {featureProduct.users.level}
            </p>
          </div>
          <div className="mt-3">
            <p className=" text-slate-600 mb-2 lg:text-[0.96rem]  sm:flex hidden md:text-[0.9rem] xl:text-[0.94rem]  sm:text-[0.9rem] text-[1rem]   font-medium">
              {decimalConversion}
              <span className="text-gray-800 md:text-[0.6rem] xl:text-[0.6rem] sm:text-[0.55rem] lg:ml-1 xl:mt-[3.5px] lg:mt-[2px]   sm:mt-[2px] md:mt-[1px] ml-[1px] sm:ml-[3px]  sm:text-sm text-[0.5rem] font-meduim">
                USD
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
