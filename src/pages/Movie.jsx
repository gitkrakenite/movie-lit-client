import { useEffect, useState } from "react";

import axios from "../axios";
import { toast } from "react-toastify";

import { Link, useParams } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import Comment from "../components/Comment";
import moment from "moment";

const Movie = () => {
  const { user } = useSelector((state) => state.auth);

  // fetch the post
  const { id } = useParams();
  const [singleScene, setSingleScene] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchScene = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/scene/" + id);
      if (response) {
        setLoading(false);
        setSingleScene([response.data]);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Fetching Scene.");
      toast.error("Network error or doesn't exist");
    }
  };

  useEffect(() => {
    fetchScene();
  }, []);

  // const [allPosts, setAllPosts] = useState([]);

  // const fetchAllPosts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get("/post");
  //     if (response) {
  //       setAllPosts(response.data);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllPosts();
  // }, []);

  return (
    <div className=" px-[10px] sm:px-[3em] py-[20px]">
      {/* wrapper */}

      <Link to="/home">
        <p className="mb-[20px]">
          <AiOutlineArrowLeft className="text-3xl" />
        </p>
      </Link>

      {/* scene */}
      {loading ? (
        <div className="h-[63vh] w-full flex items-center justify-center">
          <Spinner message="Loading Scene" />
        </div>
      ) : (
        <div className="">
          {singleScene?.map((item) => (
            <div key={item.id} className="">
              <div className="flex flex-col xl:flex-row gap-[20px] items-center xl:items-start">
                {/* video side */}
                <div className=" w-full xl:flex-[0.5]">
                  <iframe
                    className="w-full h-[500px] md:h-[740px] "
                    src={item.iframeLink}
                    title="Edge of Tomorrow - Official Main Trailer [HD]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                {/* text side */}
                <div className=" flex-[0.5] w-full">
                  <div>
                    <div className="flex justify-between md:gap-[25px] gap-[10px] flex-wrap mb-[15px]">
                      <p className="text-xl font-bold">{item.title}</p>
                    </div>

                    <p className="mb-[15px]">{item.description}</p>
                    <p className="mb-[15px]">Genre : {item.category}</p>

                    <div className="flex justify-between gap-[20px] flex-wrap mb-[15px]">
                      <div className="flex items-center gap-[10px] text-emerald-700 hover:text-emerald-500">
                        <a
                          href={`${item.trailer}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Watch Trailer
                        </a>
                        <FiArrowUpRight />
                      </div>
                      <div className="flex items-center gap-[10px] text-emerald-700 hover:text-emerald-500">
                        <a
                          href={`${item.movieLink}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Watch Movie
                        </a>
                        <FiArrowUpRight />
                      </div>
                    </div>

                    <div className="flex justify-between md:gap-[25px] gap-[10px] flex-wrap mb-[15px]">
                      <p>Added By : {item.creator}</p>
                      <p className="text-sm">
                        {" "}
                        <span className="text-sm text-orange-600">@</span>{" "}
                        {moment(item.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>

                  {/* comments */}
                  <div className="my-[20px]">
                    {/* <h2 className="text-zinc-400 text-xl my-[10px]">
                    All Comments
                  </h2> */}
                    {/* create comment */}

                    {!user && (
                      <>
                        <p className="text-zinc-500 text-lg mb-[10px]">
                          You need an account to See other people&apos;s
                          comments
                        </p>

                        <Link to="/login" className="underline text-orange-500">
                          {" "}
                          Login Now
                        </Link>
                      </>
                    )}

                    {user && <Comment item={item} />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movie;
