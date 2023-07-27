import Masonry from "react-masonry-css";
import {
  AiOutlineArrowUp,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };

  // scroll to top functionality
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* wrapper */}
      {showArrow && (
        <div
          className="fixed bottom-20 right-4 text-3xl z-[999] cursor-pointer bg-emerald-600 text-zinc-50 rounded-full p-[5px]"
          onClick={handleScrollTop}
        >
          <AiOutlineArrowUp />
        </div>
      )}
      {/*  */}
      <div className="pt-[1px] px-[8px]  lg:px-[5em]">
        {/* topbar */}
        <div
          className="fixed top-0 left-0 w-full z-[999] py-[10px] px-[8px]  lg:px-[5em]"
          style={{
            background: "rgba(12, 7, 7, 0.9)",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-[25px]">
            <div className="flex-[0.4] w-full flex items-center gap-[18px] sm:gap-[38px] justify-between">
              <div className="">
                <h2>
                  <span className="text-2xl bg-white px-[5px] sm:px-[8px] py-[1px] sm:py-[3px] rounded-md font-bold text-black mr-[4px]">
                    M
                  </span>
                  <span className="text-2xl bg-white px-[5px] sm:px-[8px] py-[1px] sm:py-[3px] rounded-md font-bold text-black mr-[4px] ">
                    0
                  </span>
                  <span className="text-2xl bg-white px-[5px] sm:px-[8px] py-[1px] sm:py-[3px] rounded-md font-bold text-black mr-[4px]">
                    V
                  </span>
                  <span className="text-2xl bg-white px-[5px] sm:px-[8px] py-[1px] sm:py-[3px] rounded-md font-bold text-black mr-[4px]">
                    Y
                  </span>
                  <span className="text-2xl bg-white px-[5px] sm:px-[8px] py-[1px] sm:py-[3px] rounded-md font-bold text-black mr-[4px]">
                    T
                  </span>
                </h2>
              </div>

              {/* options */}
              <div className=" flex w-full justify-end items-center gap-[13%]">
                <Link to="/create">
                  <AiOutlinePlus
                    className="bg-emerald-800 px-[7px] py-[4px] rounded-lg text-4xl"
                    title="Add Scene"
                  />
                </Link>
                <div>
                  <p
                    className="font-bold cursor-pointer hidden sm:block"
                    style={{ letterSpacing: "1px" }}
                  >
                    LOGOUT
                  </p>
                  <BsArrowUpRightCircle
                    className="text-2xl cursor-pointer sm:hidden"
                    title="logout"
                  />
                </div>
              </div>
            </div>
            {/* search */}
            <div className="flex-[0.6] w-full flex justify-end">
              <form className="flex gap-[10px] items-center bg-zinc-900 w-[100%] md:w-[80%] lg:w-[50%] p-[8px] rounded-md">
                <AiOutlineSearch className="text-2xl text-emerald-600" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  required
                  className="bg-transparent w-full border-none outline-none"
                />
              </form>
            </div>
            {/*  */}
          </div>
        </div>
        {/* masonry data */}
        <div className="mt-[70px]">
          <img
            src="https://images.pexels.com/photos/3637653/pexels-photo-3637653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="h-[400px] object-contain py-[20px]"
          />
          <img
            src="https://images.pexels.com/photos/3637653/pexels-photo-3637653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="h-[400px] object-contain py-[20px]"
          />
          <img
            src="https://images.pexels.com/photos/3637653/pexels-photo-3637653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="h-[400px] object-contain py-[20px]"
          />
          <img
            src="https://images.pexels.com/photos/3637653/pexels-photo-3637653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="h-[400px] object-contain py-[20px]"
          />
          <img
            src="https://images.pexels.com/photos/3637653/pexels-photo-3637653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="h-[400px] object-contain py-[20px]"
          />
          <img
            src="https://images.pexels.com/photos/3637653/pexels-photo-3637653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="h-[400px] object-contain py-[20px]"
          />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
