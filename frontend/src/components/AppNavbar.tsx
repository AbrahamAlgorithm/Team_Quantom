import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' }
];

function AppNavbar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const navRef = useRef<HTMLUListElement | null>(null);
  const location = useLocation();

  const toggleNav = () => setShowNav(!showNav);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrollPercentage);
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 10) setShowNav(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setShowNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <motion.div 
        className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 absolute bottom-0 left-0"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 -ml-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={Logo}
              alt="DocTrim Logo"
              className="h-9 w-auto"
            />
          </Link>

          {/* Navigation Items - pushed to center */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item.path}>
                  <Link
                    to={item.path}
                    className="relative text-white/90 hover:text-white transition-colors px-3 py-2"
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400"
                        initial={false}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Auth Buttons - pushed to right */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/login"
                className="text-white/90 hover:text-white transition-colors px-4 py-2"
              >
                Login
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleNav}
            className="md:hidden text-white ml-auto p-2"
          >
            <CgMenuRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showNav && (
          <motion.ul
            ref={navRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 inset-x-0 mx-4 rounded-xl bg-white/10 backdrop-blur-lg md:hidden divide-y divide-white/10 shadow-xl"
          >
            {navItems.map((item) => (
              <motion.li
                key={item.path}
                whileHover={{ x: 10 }}
                className="first:rounded-t-xl"
              >
                <Link
                  to={item.path}
                  className={`block px-6 py-4 text-white hover:text-blue-400 transition-all ${
                    location.pathname === item.path ? 'bg-white/5' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <div className="p-6 space-y-3">
              <Link
                to="/login"
                className="block w-full text-center text-white border border-white/20 py-3 px-6 rounded-lg hover:bg-white/5 transition-all"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Link>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default AppNavbar;