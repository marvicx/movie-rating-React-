import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SlideOver from "../components/SlideOver";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { TrashIcon } from "@heroicons/react/24/solid";
import MultiSearchBar from "../components/MultiSearchBar";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const Header = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSlideOver = (data) => {
    setShowSlider(data);
  };
  const handleSearchInput = (data) => setSearchQuery(data);
  return (
    <nav>
      <div className="bg-slate-800 p-2 shadow">
        <div className="flex flex-row items-center justify-between">
          <div className="text-xl font-bold text-white">🍿IMD</div>

          <SearchBar
            className="hidden sm:block sm:w-64 lg:w-lg"
            placeholder="Search Movie..."
          />
          <span className="hidden text-gray-300 md:block">
            Found 10 result(s)
          </span>

          <div className="block text-xl font-bold text-white sm:hidden">
            <MagnifyingGlassIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => handleSlideOver(true)}
            />
            <SlideOver
              isOpen={showSlider}
              setShow={handleSlideOver}
              header={false}
              width="full"
            >
              <MultiSearchBar
                closable={true}
                handleClose={handleSlideOver}
                handleInput={handleSearchInput}
              />
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {products.map((product) => (
                        <li key={product.id} className="flex py-2">
                          <div className="size-14 shrink-0 overflow-hidden rounded-md border border-gray-200 md:size-24">
                            <img
                              alt={product.imageAlt}
                              src={product.imageSrc}
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="ml-2 flex w-full flex-col justify-center">
                            <span className="text-base">{product.name}</span>
                            <span className="text-sm">🗓️ 2025</span>
                          </div>
                          <button role="button" className="cursor:pointer">
                            <TrashIcon className="size-5 text-red-700" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SlideOver>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
