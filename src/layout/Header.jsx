import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SlideOver from "../components/SlideOver";
import { useState } from "react";

const Header = () => {
  const [showSlider, setShowSlider] = useState(false);

  const handleSlideOver = (data) => {
    setShowSlider(data);
  };
  return (
    <nav>
      <div className="bg-slate-800 p-4 shadow">
        <div className="flex flex-row items-center justify-between">
          <div className="text-xl font-bold text-white">🍿MyWebsite</div>

          <div className="text-xl font-bold text-white">
            <MagnifyingGlassIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => handleSlideOver(true)}
            />
            <SlideOver isOpen={showSlider} setShow={handleSlideOver} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
