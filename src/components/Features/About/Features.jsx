export default function Features() {
  return (
    <div id="features" className="py-16">
      <div className="md:w-2/3 lg:w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-secondary"
        >
          <path fillRule="evenodd" d="..." />
        </svg>
        <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
          A technology-first approach to payments and finance
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
          minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
          magni adipisci.
        </p>
      </div>
      <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        {/* Feature 1 */}
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                First feature
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Neque Dolor, fugiat non cum doloribus aperiam voluptates
                nostrum.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              <span className="text-sm">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path fillRule="evenodd" d="..." />
              </svg>
            </a>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Second feature
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Neque Dolor, fugiat non cum doloribus aperiam voluptates
                nostrum.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              <span className="text-sm">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path fillRule="evenodd" d="..." />
              </svg>
            </a>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Third feature
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Neque Dolor, fugiat non cum doloribus aperiam voluptates
                nostrum.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              <span className="text-sm">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path fillRule="evenodd" d="..." />
              </svg>
            </a>
          </div>
        </div>
        {/* More Features */}
        <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                More features
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Neque Dolor, fugiat non cum doloribus aperiam voluptates
                nostrum.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              <span className="text-sm">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path fillRule="evenodd" d="..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}