import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const SlideOver = ({ isOpen, setShow }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setShow(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-center justify-between gap-2">
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setShow(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <ArrowLeftIcon
                            aria-hidden="true"
                            className="size-6"
                          />
                        </button>
                      </div>

                      {/* <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle> */}
                      <div className="flex w-full justify-between rounded-full border border-gray-300 px-2 py-1 shadow-sm">
                        <input
                          type="text"
                          className="w-full text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root"></div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SlideOver;
