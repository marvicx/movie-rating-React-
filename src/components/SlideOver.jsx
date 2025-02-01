import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SlideOver = ({
  isOpen,
  setShow,
  header = true,
  width = "md",
  children,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setShow(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <DialogPanel
                transition
                className={`pointer-events-auto w-screen max-w-${width} transform data-closed:translate-x-full sm:duration-700`}
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  {header ? <DefaultOverlayHeader onClose={setShow} /> : null}

                  {children}
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

const DefaultOverlayHeader = ({ onClose }) => {
  return (
    <>
      <div className="flex items-start justify-between p-4">
        <DialogTitle className="text-lg font-medium text-gray-900">
          Shopping cart
        </DialogTitle>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            onClick={() => onClose(false)}
            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Close panel</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideOver;
