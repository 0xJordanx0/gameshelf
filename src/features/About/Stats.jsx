export default function Stats() {
  return (
    <div id="solution mb-10  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-sky-500"
      >
        <path
          fillRule="evenodd"
          d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
          clipRule="evenodd"
        />
      </svg>

      <div className="mt-20 flex-row-reverse justify-between space-y-6 text-gray-600 sm:mt-14 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
        <div className="lg:w-1/2">
          <img
            src="./images/pie.svg"
            alt="image"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2
            className=" mt-10 text-[1.4rem] font-bold text-gray-800  md:mt-0 md:text-[1.8rem] 3xl:text-4xl 
  "
          >
            Dedicated Experts Crafting the Ultimate Gaming Marketplace
          </h2>
          <p className="my-8 text-gray-600">
            Our platform is meticulously crafted by enthusiastic developers who
            share an unwavering passion for gaming. We bring you a comprehensive
            gaming marketplace where you can explore an array of in-game items,
            accounts, virtual coins, and more.
            <br /> <br />
            Immerse yourself in the world of gaming with our user-friendly
            interface and discover a diverse range of options to enhance your
            gaming experience.
          </p>
          <div className="space-y-4 divide-y divide-gray-100">
            <div className="mt-8 flex gap-4 md:items-center">
              <div className="flex h-12 w-12 gap-4 rounded-full bg-indigo-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="m-auto h-6 w-6 text-indigo-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-5/6">
                <h4 className="text-lg font-semibold text-gray-700">
                  Round-the-Clock Support
                </h4>
                <p className="text-gray-500">
                  Instant help for seamless shopping.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-4 md:items-center">
              <div className="flex h-12 w-12 gap-4 rounded-full bg-teal-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="m-auto h-6 w-6 text-teal-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-5/6">
                <h4 className="text-lg font-semibold text-gray-700">
                  Live Tracking for Ultimate Assurance{" "}
                </h4>
                <p className="text-gray-500">
                  ensuring your gaming adventures begin right on schedule.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
