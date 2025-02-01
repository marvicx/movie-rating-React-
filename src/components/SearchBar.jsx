import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

const SearchBar = ({
  handleInput,
  className,
  placeholder = "Search...",
  placeholderAlign = "start",
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // Auto-focus the input on mount
  }, []);
  return (
    <>
      <div className={className}>
        <div className="flex w-full justify-between rounded-full border-gray-200 bg-gray-200 px-3 py-1">
          <input
            ref={inputRef}
            type="text"
            className={`w-full text-base text-gray-700 placeholder-gray-500 placeholder:text-${placeholderAlign} focus:outline-none`}
            placeholder={placeholder}
            onInput={(e) => handleInput(e.target.value)}
          />
          <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
