import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
      {/* wrapper */}
      <div className=" px-[12px]  sm:px-[2em] md:px-[5em] pt-[18px] ">
        {/* topbar */}
        <div>
          <Link to="/home">
            <AiOutlineArrowLeft className="mb-[20px] text-2xl text-emerald-500" />
          </Link>
          <h2 className="text-xl mb-[10px] text-zinc-400">
            Hello Let Us Add Your Favorite Scene
          </h2>
          <p className="text-sm font-bold text-zinc-400">
            Everyone Will See it & Comment
          </p>
        </div>
        {/*  */}
        <div className="flex w-full mt-[45px] pb-[15px] justify-center items-center ">
          <form className=" w-[100%]  sm:w-[90%] lg:w-[60%] 2xl:w-[30%]">
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="title" className="text-zinc-400">
                Enter Movie / Show Name
              </label>
              <input
                type="text"
                placeholder="movie name"
                id="title"
                className="w-full p-[5px] bg-transparent outline-none border-2 border-emerald-700 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="description" className="text-zinc-400">
                Enter Scene Description
                <p className="text-sm mt-[3px]">
                  ** What Makes You like this scene ?{" "}
                </p>
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="3"
                placeholder="Scene description"
                className="w-full p-[5px] bg-transparent outline-none border-2 border-emerald-700 rounded-lg"
              ></textarea>
            </div>
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="category" className="text-zinc-400">
                What Best Describes This Scene
                <p className="text-sm mt-[3px]">
                  ** separate using spaces and commas ?{" "}
                </p>
              </label>
              <input
                type="text"
                placeholder="i.e action, romance, anime"
                id="category"
                className="w-full p-[5px] bg-transparent outline-none border-2 border-emerald-700 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="iframe" className="text-zinc-400">
                Enter The Iframe Link From Youtube
                <p className="text-sm mt-[3px]">
                  ** Remember we need only the src value{" "}
                </p>
              </label>
              <input
                type="text"
                placeholder="i.e https://www.youtube.com/embed/E3OZEu3Q6OM"
                id="iframe"
                className="w-full p-[5px] bg-transparent outline-none border-2 border-emerald-700 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="trailerLink" className="text-zinc-400">
                Trailer Of The Movie Link From Youtube
                <p className="text-sm mt-[3px]">
                  ** Remember we need only the url{" "}
                </p>
              </label>
              <input
                type="text"
                placeholder="i.e https://www.youtube.com/embed/E3OZEu3Q6OM"
                id="trailerLink"
                className="w-full p-[5px] bg-transparent outline-none border-2 border-emerald-700 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="movieLink" className="text-zinc-400">
                Enter Url To watch movie/show for free
                <p className="text-sm mt-[3px]">
                  ** free movie sites like fmovies & goojara{" "}
                </p>
              </label>
              <input
                type="text"
                placeholder="i.e https://www.youtube.com/embed/E3OZEu3Q6OM"
                id="movieLink"
                className="w-full p-[5px] bg-transparent outline-none border-2 border-emerald-700 rounded-lg"
              />
            </div>
            <div>
              <button className="bg-emerald-700 text-zinc-300 p-[8px] rounded-lg w-full">
                Share This Scene
              </button>
            </div>
          </form>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Create;
