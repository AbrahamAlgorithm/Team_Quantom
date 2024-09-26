import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { CgMenuRight } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";

function AppNavbar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement | null>(null);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const closeNavOnScroll = () => {
      if (window.scrollY > 10) {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", closeNavOnScroll);

    return () => {
      window.removeEventListener("scroll", closeNavOnScroll);
    };
  }, []);

  useEffect(() => {
    const closeNavOnTap = (e: any) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };

    document.addEventListener("mousedown", closeNavOnTap);

    return () => {
      document.removeEventListener("mousedown", closeNavOnTap);
    };
  }, []);

  return (
    <header className="py-4 px-4 text-white">
      <nav className="w-[1200px] mx-auto max-[1250px]:w-[initial] flex items-center justify-between relative">
        <div className="flex items-center gap-16">
          {/* Logo */}

          <Link to="/">
            <img src={Logo} alt="" className="w-[120px]" />
          </Link>

          {/* Navigation links */}

          <ul
            className={`flex items-center gap-6 text-[0.85rem] backdrop-blur-sm text-[#f2f2f2] opacity-80 max-[655px]:fixed max-[655px]:top-[4em] ${
              showNav ? "max-[655px]:right-4" : "max-[655px]:-right-[400px]"
            } max-[655px]:backdrop-blur-none max-[655px]:flex-col max-[655px]:bg-white max-[655px]:text-black max-[655px]:z-10 max-[655px]:p-4 max-[655px]:w-[150px] max-[655px]:items-start transition-all duration-300`}
             ref={navRef}
          >
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
            className="text-[0.8rem] bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 py-2 px-6 rounded-full max-[400px]:hidden"
          >
            Sign up
          </Link>
          <Link
            to="/auth/login"
            className="text-[0.8rem] border border-slate-300 hover:bg-[#f2f2f2] hover:text-black transition-all duration-300 py-2 px-6 rounded-full"
          >
            Login
          </Link>

          <button className="min-[656px]:hidden" onClick={toggleNav}>
            <CgMenuRight size={25} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default AppNavbar;
