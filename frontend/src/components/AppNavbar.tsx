import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <header className="py-4 px-4 text-white">
      <nav className="w-[1200px] mx-auto max-[1250px]:w-[initial] flex items-center justify-between">
        <div className="flex items-center gap-16">
          {/* Logo */}

          <Link to="/" className="text-lg font-semibold opacity-80">
            DocTrim
          </Link>

          {/* Navigation links */}

          <ul className="flex items-center gap-6 text-[0.85rem] backdrop-blur-sm text-[#f2f2f2] opacity-80 max-[655px]:hidden">
            <li>
              <Link
                to=""
                className="hover:text-blue-700 transition-all duration-300"
              >
                Products
              </Link>
            </li>
            <li className="">
              <Link
                to=""
                className="hover:text-blue-700 transition-all duration-300"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-blue-700 transition-all duration-300"
              >
                Pricing
              </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
              <Link to="">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Auth links */}

        <div className="flex items-center gap-2">
          <Link
            to="/auth/register"
            className="text-[0.8rem] bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 py-2 px-6 rounded-full"
          >
            Sign up
          </Link>
          <Link
            to="/auth/login"
            className="text-[0.8rem] border border-slate-300 hover:bg-[#f2f2f2] hover:text-black transition-all duration-300 py-2 px-6 rounded-full"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default AppNavbar;
