import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import AuthImage from "../../assets/auth-image.png";
import { IAuthInput } from "../../interfaces/auth.interface";
import { Link } from "react-router-dom";

function SignupPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuthInput>();
  const onSubmit: SubmitHandler<IAuthInput> = (data) => console.log(data);

  return (
    <>
      <div className="grid grid-cols-2 items-center min-h-screen max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center max-[768px]:mx-4 max-[768px]:py-4">
        <div className="w-[400px] max-[786px]:w-full p-6 max-[768px]:p-4 mx-auto border border-gray-300 shadow-sm">
          <header className="text-center">
            <h2 className="text-center font-medium text-xl">DocTrim</h2>
            <h3 className="font-medium text-[0.8rem] opacity-50 mt-2">
              Create an account to get started
            </h3>
          </header>

          {/* Auth form */}

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            {/* Form fields */}

            <div className="space-y-4 mt-6">
              {/* Email input */}

              <div className="space-y-1">
                <label htmlFor="email" className="space-x-1">
                  <span className="text-sm font-medium opacity-70">Email</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full text-sm border-[1.5px] py-2 px-3 rounded-lg outline-none transition-all duration-300 ${
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
                  <span className="text-sm font-medium opacity-70">
                    Password
                  </span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={`w-full text-sm border-[1.5px] py-2 px-4 rounded-lg outline-none transition-all duration-300 ${
                    errors.password ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="*****************"
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-[0.75rem] text-red-500">
                    Password is required
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="inline-block text-sm mt-8 w-full bg-blue-400 py-2 rounded-full  hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Create account
            </button>

            {/* SSO Buttons */}

            <button
              className="flex items-center justify-center gap-2 mt-10 rounded-full py-2 border border-slate-400 w-full hover:bg-[#f2f2f2] transition-all duration-300"
              type="button"
            >
              <FcGoogle size={20} />
              <span className="text-sm">Sign in with Google</span>
            </button>
          </form>

          {/* Auth footer */}

          <footer className="mt-1 flex items-center justify-center gap-2 text-[0.75rem] mt-2">
            <span className="">Already signed up?</span>
            <Link
              to="/auth/login"
              className="text-blue-500 font-semibold hover:underline underline-offset-4"
            >
              Sign in here
            </Link>
          </footer>
        </div>

        <div className="bg-blue-400 h-full flex items-center justify-center max-[786px]:hidden">
          <img src={AuthImage} alt="auth-image" />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
