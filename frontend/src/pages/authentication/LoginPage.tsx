import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import AuthImage from "../../assets/auth-image.png";
import type { IAuthInput } from "../../interfaces/auth.interface";
import { Link, useNavigate } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import type { IWindowDimension } from "../../interfaces/globals.interface";
import axiosInstance from "../../utils/axiosInstance";
import { ColorRing } from "react-loader-spinner";
import handleRequestError from "../../utils/error.handler";
import toast from "react-hot-toast";
import authService from "../../utils/auth.service";

function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [windowDimension, setWindowDimension] = useState<IWindowDimension>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const loginFormRef = useRef<HTMLFormElement | null>(null);
  const detechWindowSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", detechWindowSize);
    return () => window.removeEventListener("resize", detechWindowSize);
  }, [windowDimension]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuthInput>();
  const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
    setIsLoading(true);

    await axiosInstance
      .post("/account/login/", data)
      .then((response) => {
        const { data } = response.data;

        // store user to local storage

        authService.setAccessToken(data.access_token);
        authService.setUser({ id: data.id, email: data.email });

        toast.success("Login successful, redirecting...");

        // show confetti

        setShowConfetti(true);

        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
        // clear form data

        if (loginFormRef.current) {
          loginFormRef.current.reset();
        }
      })
      .catch((error) => {
        if (loginFormRef.current) {
          loginFormRef.current.password.value = "";
        }

        console.error(error);
        handleRequestError(error);
      });

    // stop loading

    setIsLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 items-center min-h-screen max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center max-[768px]:mx-4 max-[768px]:py-4">
        <div className="w-[400px] max-[786px]:w-full p-6 max-[768px]:p-4 mx-auto border border-gray-300 shadow-sm">
          <header className="text-center">
            <h2 className="text-center font-medium text-xl">DocTrim</h2>
            <h3 className="font-medium text-[0.8rem] opacity-50 mt-2">
              Welcome Back, Sign In to Continue
            </h3>
          </header>

          {/* Auth form */}

          <form action="" onSubmit={handleSubmit(onSubmit)} ref={loginFormRef}>
            {/* Form fields */}

            <div className="space-y-4 mt-6">
              {/* Email input */}

              <div className="space-y-1">
                <label htmlFor="email" className="space-x-1">
                  <span className="text-[0.8rem] font-medium opacity-70">
                    Email
                  </span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full text-[0.75rem] border-[1.5px] py-2 px-3 rounded-lg outline-none transition-all duration-300 ${
                    errors.email ? "border-red-300" : "border-gray-200"
                  }`}
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-[0.75rem] text-red-500">
                    Email is required
                  </p>
                )}
              </div>

              {/* Password input */}

              <div className="space-y-1">
                <label htmlFor="email" className="space-x-1">
                  <span className="text-[0.8rem] font-medium opacity-70">
                    Password
                  </span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`w-full text-[0.75rem] border-[1.5px] py-2 px-4 rounded-lg outline-none transition-all duration-300 ${
                      errors.password ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="*****************"
                    {...register("password", { required: true })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <span
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                    role="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <VscEyeClosed size={20} />
                    ) : (
                      <VscEye size={20} />
                    )}
                  </span>
                </div>
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-[0.75rem] text-red-500">
                    Password is required
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="text-[0.75rem] mt-8 w-full bg-blue-400 py-2 rounded-full  hover:bg-blue-500 hover:text-white transition-all duration-300 flex justify-center items-center"
            >
              {isLoading ? (
                <ColorRing
                  visible={true}
                  height="25"
                  width="25"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                />
              ) : (
                "Login to your account"
              )}
            </button>

            {/* SSO Buttons */}

            <button
              className="flex items-center justify-center gap-2 mt-10 rounded-full py-2 border border-slate-400 w-full hover:bg-[#f2f2f2] transition-all duration-300"
              type="button"
            >
              <FcGoogle size={20} />
              <span className="text-[0.8rem]">Sign in with Google</span>
            </button>
          </form>

          {/* Auth footer */}

          <footer className="flex items-center justify-center gap-2 text-[0.75rem] mt-2">
            <span className="">Not signed up yet?</span>
            <Link
              to="/auth/register"
              className="text-blue-500 font-semibold hover:underline underline-offset-4"
            >
              Create an account
            </Link>
          </footer>
        </div>

        <div className="bg-blue-400 h-full flex items-center justify-center max-[786px]:hidden">
          <img src={AuthImage} alt="auth-image" />
        </div>
      </div>

      {/* Confetti */}

      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          tweenDuration={5000}
        />
      )}
    </>
  );
}

export default LoginPage;
