import { IoSearch } from "react-icons/io5";
import { useMenuStore } from "../../store/useMenuStore";

export const MobileMenu = () => {
  const { toogleMenu, closeMenu } = useMenuStore();
  // if (!toogleMenu) {
  //   return null;
  // }
  return (
    <div className="flex flex-col gap-4 mb-2 md:hidden">
      <div className="flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            id="input-group-1"
            placeholder="Search Destinations"
            className="bg-[#efeff1] rounded-4xl w-80 lg:w-96 px-5 py-2.5"
          />
          <IoSearch className="absolute text-2xl right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <button className="bg-[#28364c] border border-[#28364c] w-28 sm:w-32 text-center text-white rounded-4xl p-3">
          Book Now
        </button>
      </div>
      <ul className="items-center gap-4">
        <li>
          <a href="#" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>
    </div>
  );
};
