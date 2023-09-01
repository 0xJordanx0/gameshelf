import MessageSearchBar from "./MessageSearchBar";
import MessageComponentEachUser from "./MessageComponentEachUser";
const messages = [
  {
    name: "Abdullah",
    message: "Hey, how are you doing?",
  },
  {
    name: "Alice",
    message: "I'm good, thanks for asking!",
  },
  {
    name: "Alice",
    message: "I'm good, thanks for asking!",
  },
  {
    name: "Jordan",
    message: "Did you catch the game last night?",
  },
  {
    name: "Jennifer",
    message: "Sure did! It was an intense match.",
  },
  {
    name: "Emma",
    message: "What's the plan for the weekend?",
  },

  // {
  //   name: "Olivia",
  //   message: "We're aiming to finish it by next week.",
  // },
  // {
  //   name: "Ibad",
  //   message: "I heard there's a new restaurant in town.",
  // },
  // {
  //   name: "Michael",
  //   message: "Any updates on the project deadline?",
  // },
];
export default function MessagePage() {
  return (
    <div className="flex flex-row h-screen antialiased text-gray-800">
      <div className="sm:flex flex-row w-72 md:w-72 lg:w-80 flex-shrink-0 bg-white hidden   border-r-2 ">
        <div className="sm:flex flex-col w-full h-full  ">
          <div className="flex flex-row items-center pl-4 pr-4 pt-6 ">
            <div className="flex flex-row items-center mt-1">
              <a href="/" className="text-xl font-semibold">
                <img src="/logo4.png " className=" w-10 h-6" alt="" />
              </a>
              <a href="/">
                <div className="flex items-center justify-center ml-2 text-lg   text-gray-700  rounded-full font-extrabold">
                  GAMERSHELF
                </div>
              </a>
            </div>
            <div className="ml-auto">
              <img
                className="h-9 w-9 rounded-full"
                src="/ProfileImg2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" pl-4 pr-4 pt-2 ">
            <MessageSearchBar />
          </div>
          <div className="pl-4">
            <select
              id="location"
              name="location"
              className="block w-[30%]  rounded-md border-0  text-sm text-gray-900  ring-inset  "
              defaultValue="Canada"
            >
              <option>All Contacts</option>
            </select>
          </div>
          <div className="">
            <div className=" overflow-y-auto ">
              {messages.map((message, index) => (
                <button key={index} className=" p-4 hover:bg-red-100 w-full">
                  <MessageComponentEachUser message={message} index={index} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-white px-4 ">
        <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
            <img
              src={`/images/avatars/avatar-0.webp`}
              className=" rounded-full"
            ></img>
          </div>
          <div className="flex flex-col ml-3">
            <div className="font-semibold text-sm">Abdullah</div>
            <div className="text-xs text-gray-500">Active</div>
          </div>
          <div className="ml-auto">
            <ul className="flex flex-row items-center space-x-2">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                >
                  <span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      stroke="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                >
                  <span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      stroke="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                >
                  <span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full overflow-hidden py-4">
          <div className="h-full overflow-y-auto">
            <div className="grid grid-cols-12 gap-y-2">
              <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div>Hey How are you today?</div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel ipsa commodi illum saepe numquam maxime asperiores
                      voluptate sit, minima perspiciatis.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                    <div>Im ok what about you?</div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div>Lorem ipsum dolor sit amet !</div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                    </div>
                    <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                      Seen
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, in.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div className="flex flex-row items-center">
                      <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center  mb-4">
          <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
            <button className="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            <div className="w-full ">
              <input
                type="text"
                className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                placeholder="Type your message...."
              />
            </div>
            <div className="flex flex-row">
              <button className="flex items-center justify-center h-10 w-8 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                </svg>
              </button>
              <button className="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="ml-6">
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white">
              <svg
                className="w-5 h-5 transform rotate-90 -mr-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}