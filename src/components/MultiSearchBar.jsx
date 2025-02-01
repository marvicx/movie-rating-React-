import { ArrowLeftIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import SearchBar from "./SearchBar";

const MultiSearchBar = ({ closable, handleClose, handleInput }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 bg-gray-100 px-1 py-2 sm:px-2">
        {closable ? (
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              onClick={() => handleClose(false)}
              className="relative cursor-pointer text-gray-800"
            >
              <ArrowLeftIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        ) : null}

        <SearchBar
          placeholder="Search Movie"
          placeholderAlign="center"
          className="w-full"
          handleInput={handleInput}
        />
        <button
          type="button"
          className="cursor-pointer rounded-full bg-gray-200 p-1.5"
        >
          <MicrophoneIcon className="size-5 text-gray-800" />
        </button>
      </div>
    </>
  );
};

export default MultiSearchBar;
