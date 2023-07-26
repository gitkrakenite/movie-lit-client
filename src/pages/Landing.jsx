import { Link } from "react-router-dom";
import bg from "../assets/mv3.jpg";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-[100vh]">
        <img
          src={bg}
          alt="Background Placeholder"
          className="w-full h-[100vh] object-cover"
        />

        {/* overlay div */}
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,.7)]" />
        <div className="absolute w-full h-full top-0 f text-white">
          <div className="flex justify-between px-[10px]  md:px-[3em] py-[20px]">
            <h2>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px]">
                M
              </span>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px] ">
                0
              </span>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px]">
                V
              </span>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px]">
                Y
              </span>
              <span className="text-2xl bg-white px-[8px] py-[3px] rounded-md font-bold text-black mr-[4px]">
                T
              </span>
            </h2>
            <Link
              to="/login"
              className="z-[999] text-lg"
              style={{ fontWeight: 600 }}
            >
              LOGIN
            </Link>
          </div>
        </div>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
          <p className=" text-2xl text-center sm:text-start  sm:text-4xl md:text-5xl mb-[15px] font-bold">
            Best Trailers And Clips,
          </p>
          <p className="text-2xl text-center sm:text-start sm:text-4xl md:text-5xl mb-[20px] font-bold">
            From Your Favorite Movies & Shows
          </p>
          <p
            className=" text-lg text-center sm:text-start sm:text-2xl mb-[25px]"
            style={{ fontWeight: 100 }}
          >
            Take a trip down memory lane by checking out famous clips
          </p>
          <Link to="/register" className="mb-[2em]">
            {/* border: 2px solid #0495ca; */}
            <p className="text-btn border-2 border-emerald-700">
              CREATE ACCOUNT
            </p>
          </Link>
          <Link to="/home" className="hover:text-emerald-400">
            PROCEED WITHOUT ACCOUNT
          </Link>
        </div>
      </div>
      {/* other stuff */}
      {/* <div className="mt-[2.2em]">
        <div className=" px-[10px] sm:px-[1em] md:px-[3em] py-[26px]">
          <div>
            <h2
              className=" text-md font-bold mb-[20px] text-emerald-500 text-center"
              style={{ letterSpacing: "1px" }}
            >
              Best Scenes From Movies & Shows
            </h2>
            <p className="text-3xl text-center mb-[10px]">
              Add Your Favorite Scenes From Movies & Shows
            </p>
            <p className="text-lg font-bold text-center ">
              It&apos;s Greate Content For Free
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
