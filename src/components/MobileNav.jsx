import React from "react";

function MobileNav({ item, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-blur-md bg-black/10 text-white">
      {/* {<ul>item.map((e)=>( ))</ul>} */}
      <div className="flex justify-end">
        <button
          className="flex justify-end mt-5  p-5 rounded"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="flex items-center justify-center flex-col h-full  gap-10">
        {item.map((item, i) => (
          <li key={i} className="text-4xl nav-hover-btn ">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNav;
