import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("Please Check Login Details");
      toast.error("Also Check Network");
    }

    if (user || isSuccess) {
      navigate("/home");
    }

    if (navigator.onLine) {
      console.log("online");
    } else {
      toast.error("Network Error");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, isLoading, navigate, dispatch]);

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!username || !password) {
      setLoading(false);
      return toast.error("Please Fill All Fields", { theme: "dark" });
    }
    const userData = { username, password };
    dispatch(login(userData));
    setLoading(false);
  };

  return (
    <div className=" px-[10px] sm:px-[3em] lg:px-[5em] py-[1em] sm:py-[1.6em]">
      <div className="mb-[2.6em]">
        <Link to="/">
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
        </Link>
      </div>
      {/* wrapper */}
      <div className="h-[80vh] flex justify-center items-center w-[100%]">
        <div className="w-[100%] flex justify-center items-center">
          <form
            className=" w-[98%] sm:w-[85%] md:w-[60%]  xl:w-[45%] 2xl:w-[30%]"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col gap-[10px] mb-[15px]">
              <label
                htmlFor="username"
                className="font-bold text-xl text-zinc-600"
              >
                Enter Your Username
              </label>
              <input
                type="text"
                placeholder="username"
                id="username"
                required
                className="bg-transparent border border-zinc-500 p-[8px] rounded-md outline-none"
                value={username}
                minLength={3}
                maxLength={18}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-[15px] mb-[20px]">
              <div className=" flex-[0.9] flex flex-col gap-[10px]">
                <label
                  htmlFor="password"
                  className="font-bold text-xl text-zinc-600"
                >
                  Enter Your Password
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  id="password"
                  required
                  className="bg-transparent border border-zinc-500 p-[8px] rounded-md outline-none"
                  value={password}
                  minLength={3}
                  maxLength={18}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex-[0.1] flex mt-[35px] justify-end">
                {showPass ? (
                  <AiOutlineEyeInvisible
                    className="text-3xl cursor-pointer"
                    onClick={() => setShowPass(false)}
                  />
                ) : (
                  <AiOutlineEye
                    className="text-3xl cursor-pointer"
                    onClick={() => setShowPass(true)}
                  />
                )}
              </div>
            </div>

            <div>
              {loading ? (
                <Spinner />
              ) : (
                <button
                  className="bg-emerald-800 w-full p-[9px] rounded-md text-zinc-300 hover:text-zinc-200"
                  onClick={handleLogin}
                >
                  Sign In Now
                </button>
              )}
            </div>
            <div className="mt-[30px] flex items-center gap-[20px] flex-wrap justify-between">
              <Link to="/register" className="underline hover:text-emerald-600">
                <p>Are You New Here? </p>
              </Link>
              <a href="mailto:daysseller@gmail.com" className="underline">
                Mail Admin
              </a>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Login;
