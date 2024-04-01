import React from "react";

function BlogsContainer() {
  return (
    <div className=" sm:ml-20 w-full px-2 sm:w-3/5 flex flex-col gap-3">
      <div className="flex shadow-md bg-gray-100 px-3 py-2 hover:bg-gray-200 cursor-pointer">
        <div className="w-full sm:w-4/5">
          <h1 className="text-lg sm:text-xl font-bold mb-3">
            Personal Roadmap for becoming a better software developer in 2024
          </h1>
          <p className="mb-3 hidden sm:block text-slate-900">
            Diversify your skill set by learning languages that are in high
            demand. Python, JavaScript, and Go are great choices for their
            widespread use and versatility.
          </p>
          <div className="flex gap-7 text-slate-600">
            <h3 className="font-bold">Abhishek kumar</h3>
            <h3>01 Jan, 2024</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sYO1JaCWZZKEL23QxJvsvQ.jpeg"
            alt="img"
            className="h-20 sm:h-28"
          />
          <button className="w-10 px-1 py-2 font-bold bg-green-400 rounded-full hover:bg-green-800">
            +
          </button>
        </div>
      </div>

      <div className="flex shadow-md bg-gray-100 px-3 py-2">
        <div className="sm:w-4/5 w-full">
          <h1 className="text-lg sm:text-xl font-bold mb-3">
            Personal Roadmap for becoming a better software developer in 2024
          </h1>
          <p className="mb-3 hidden sm:block text-slate-900">
            Diversify your skill set by learning languages that are in high
            demand. Python, JavaScript, and Go are great choices for their
            widespread use and versatility.
          </p>
          <div className="flex gap-7 text-slate-600">
            <h3 className="font-bold">Abhishek kumar</h3>
            <h3>01 Jan, 2024</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sYO1JaCWZZKEL23QxJvsvQ.jpeg"
            alt="img"
            className="h-20 sm:h-28"
          />
          <button className="w-10 px-1 py-2 font-bold bg-green-400 rounded-full hover:bg-green-800">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogsContainer;
