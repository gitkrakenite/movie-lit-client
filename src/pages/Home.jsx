import {
  AiOutlineArrowUp,
  AiOutlineComment,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import axios from "../axios";
import { toast } from "react-toastify";
import moment from "moment";

const Home = () => {
  // const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // fetch reviews
  const [loading, setLoading] = useState(false);
  const [scenes, setScenes] = useState([]);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/scene");
      if (response) {
        setLoading(false);
        setScenes(response.data);
      }
      setLoading(false);
    } catch (error) {
      toast.error("Network Error");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // search  states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // search user func
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);
    // console.log(searchText);

    handleScrollTop();

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = scenes?.filter(
          (item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.category.toLowerCase().includes(searchText.toLowerCase()) ||
            item.description.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
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
      <div className="pt-[5px] px-[8px]  lg:px-[1em]  xl:px-[5em]">
        {/* topbar */}
        <div
          className="fixed top-0 left-0 w-full z-[999] py-[15px] px-[8px]  lg:px-[5em]"
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
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </p>
                  <BsArrowUpRightCircle
                    className="text-2xl cursor-pointer sm:hidden"
                    title="logout"
                    onClick={handleLogout}
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
                  placeholder="Search Anything"
                  required
                  className="bg-transparent w-full border-none outline-none"
                  value={searchText}
                  onChange={handleSearchChange}
                />
              </form>
            </div>
            {/*  */}
          </div>
        </div>
        {/* masonry data */}
        <div className="mt-[70px]">
          <div>
            {searchText ? (
              <>
                <div className="mb-[15px] text-orange-200 text-sm">
                  {searchText && <p>Results For : {searchText} </p>}
                </div>

                {searchedResults?.length >= 1 ? (
                  <>
                    <div className="iframeWrapper ">
                      {searchedResults?.map((item) => (
                        <div key={item._id} className="iframeItem bg-zinc-900">
                          <Link to={`/review/${item._id}`}>
                            <div>
                              <iframe
                                className="w-full h-[400px] "
                                src={item.iframeLink}
                                title="Edge of Tomorrow - Official Main Trailer [HD]"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                            <div className="px-[3px] pb-[5px]">
                              <div className="flex items-center justify-between">
                                <p>
                                  <span className="text-sm">Reposted</span> :{" "}
                                  {item.creator}
                                </p>
                                <p>{moment(item.createdAt).fromNow()}</p>
                              </div>
                              <div className="flex justify-between items-center mt-[10px]">
                                <p className="text-sm  text-emerald-500 font-bold">
                                  {item.title}
                                </p>
                                <div className="flex items-center gap-[10px]">
                                  <AiOutlineComment className="text-xl" />
                                  <p className="text-sm">
                                    {item.comments.length}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-center mt-[10%] text-lg">
                      😥oops no results for{" "}
                      <span className="text-emerald-500">{searchText}</span>
                    </p>
                  </>
                )}
              </>
            ) : (
              <>
                {loading ? (
                  <div className="h-[70vh] flex justify-center items-center">
                    <Spinner message="Fetching ..." />
                  </div>
                ) : (
                  <div className="iframeWrapper ">
                    {scenes?.map((item) => (
                      <div key={item._id} className="iframeItem bg-zinc-900">
                        <Link to={`/review/${item._id}`}>
                          <div>
                            <iframe
                              className="w-full h-[400px] "
                              src={item.iframeLink}
                              title="Edge of Tomorrow - Official Main Trailer [HD]"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                          <div className="px-[3px] pb-[5px]">
                            <div className="flex items-center justify-between">
                              <p>
                                <span className="text-sm">Reposted</span> :{" "}
                                {item.creator}
                              </p>
                              <p className="text-sm">
                                {" "}
                                {moment(item.createdAt).fromNow()}
                              </p>
                            </div>
                            <div className="flex justify-between items-center mt-[10px]">
                              <p className="text-sm  text-emerald-500 font-bold">
                                {item.title}
                              </p>
                              <div className="flex items-center gap-[10px]">
                                <AiOutlineComment className="text-xl" />
                                <p className="text-sm">
                                  {item.comments.length}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
