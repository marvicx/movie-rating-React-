// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import React, { useEffect, useRef, useState } from "react";
// const genres = [
//   { id: 1, name: "All", href: "#", current: true },
//   { id: 2, name: "Action", href: "#", current: false },
//   { id: 3, name: "Anime", href: "#", current: false },
//   { id: 4, name: "Black Stories", href: "#", current: false },
//   { id: 5, name: "Children & Family", href: "#", current: false },
//   { id: 6, name: "Comedies", href: "#", current: false },
//   { id: 7, name: "Crime", href: "#", current: false },
//   { id: 8, name: "Critically Acclaimed", href: "#", current: false },
//   { id: 9, name: "Critics Choice Awards", href: "#", current: false },
//   { id: 10, name: "Documentaries", href: "#", current: false },
//   { id: 11, name: "Dramas", href: "#", current: false },
//   { id: 12, name: "Horror", href: "#", current: false },
// ];
// const MovieCategory = () => {
//   return (
//     <div className="relative">
//       <div className="flex flex-row gap-3 overflow-x-auto border-y border-gray-200 p-2 font-medium whitespace-nowrap">
//         {genres.map((genre) => (
//           <button
//             key={genre.id}
//             type="button"
//             className="cursor-pointer rounded-lg bg-gray-200 px-4 py-1.5 text-sm focus:bg-gray-300 focus:text-white"
//           >
//             {genre.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieCategory;
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ScrollableTabs = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });

  const tabs = [
    { id: 1, name: "Home" },
    { id: 2, name: "Profile" },
    { id: 3, name: "Settings" },
    { id: 4, name: "Messages" },
    { id: 5, name: "Notifications" },
    { id: 6, name: "More" },
    // Repeated tabs omitted for brevity...
  ];

  const updateArrowsVisibility = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth,
      });
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateArrowsVisibility);
      scrollContainer.addEventListener("mousedown", handleMouseDown);
      scrollContainer.addEventListener("mousemove", handleMouseMove);
      scrollContainer.addEventListener("mouseup", handleMouseUp);
      scrollContainer.addEventListener("mouseleave", handleMouseUp);
    }
    return () => {
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateArrowsVisibility);
        scrollContainer.removeEventListener("mousedown", handleMouseDown);
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
        scrollContainer.removeEventListener("mouseup", handleMouseUp);
        scrollContainer.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [updateArrowsVisibility]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Speed factor
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 150;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    // <div className="relative flex w-full items-center">
    //   {showArrows.left && (
    //     <button
    //       onClick={() => scroll("left")}
    //       className="absolute left-0 z-10 rounded-full bg-gray-200 p-2 shadow-md backdrop-blur-md hover:bg-gray-300"
    //     >
    //       <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
    //     </button>
    //   )}

    //   <div
    //     ref={scrollRef}
    //     className="no-scrollbar mx-8 flex cursor-grab space-x-2 overflow-x-auto select-none"
    //   >
    //     {tabs.map(({ id, name }) => (
    //       <button
    //         key={id}
    //         type="button"
    //         className="cursor-pointer rounded-lg bg-gray-200 px-4 py-1.5 text-sm text-black hover:bg-gray-300"
    //       >
    //         {name}
    //       </button>
    //     ))}
    //   </div>

    //   {showArrows.right && (
    //     <button
    //       onClick={() => scroll("right")}
    //       className="absolute right-0 z-10 rounded-full bg-gray-200 p-2 shadow-md backdrop-blur-md hover:bg-gray-300"
    //     >
    //       <ChevronRightIcon className="h-5 w-5 text-gray-600" />
    //     </button>
    //   )}
    // </div>
    <>
      <div className="flex flex-row justify-between">
        <div className="flex h-auto">
          <button
            onClick={() => scroll("left")}
            className="bg-gray-200 hover:bg-gray-300"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="flex w-full flex-row gap-3 overflow-x-auto border-y border-gray-200 p-2 font-medium whitespace-nowrap">
          <div
            ref={scrollRef}
            className="no-scrollbar flex cursor-grab space-x-2 overflow-x-auto select-none"
          >
            {tabs.map((genre) => (
              <button
                key={genre.id}
                type="button"
                className="cursor-pointer rounded-lg bg-gray-200 px-4 py-1.5 text-sm focus:bg-gray-300 focus:text-white"
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
        <NextButton />
      </div>
    </>
  );
};

const NextButton = () => {
  return (
    <div id="right-arrow" className="flex items-center justify-center">
      <div id="right-arrow-button" className="relative">
        <button className="group relative flex h-12 w-12 items-center justify-center border-none bg-transparent focus:outline-none">
          {/* Icon */}
          <span className="transition-all duration-200 group-hover:blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="currentColor"
              className="text-gray-800"
            >
              <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
            </svg>
          </span>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform rounded bg-gray-700 px-2 py-1 text-xs text-white group-hover:block">
            Next
          </div>
        </button>
      </div>
    </div>
  );
};

export default ScrollableTabs;
