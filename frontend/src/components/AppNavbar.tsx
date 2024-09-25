import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <header className="py-4 px-4 shadow border-b border-blue-400 shadow-blue-100 fixed top-0 left-0 right-0">
      <nav className="w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-16">
          {/* Logo */}

          <Link to="/" className="text-lg font-semibold">
            DocTrim
          </Link>

          {/* Navigation links */}

          <ul className="flex items-center gap-2 text-[0.85rem]">
            <li>
              <Link to="">Products</Link>
            </li>
            <li className="">
              <Link to="">Tools</Link>
            </li>
            <li>
              <Link to="">Pricing</Link>
            </li>
            <li className="">
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
            className="text-[0.8rem] border border-slate-300 hover:bg-[#f2f2f2] transition-all duration-300 py-2 px-6 rounded-full"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default AppNavbar;
