import { Link } from "react-router-dom";
import AppNavbar from "./AppNavbar";

function HeroSection() {
  return (
    <section className="hero-section min-h-max pb-[20em]">
      <AppNavbar />

      <div className="mt-[10em] backdrop-blur-sm px-4">
        {/* Hero Content */}

        <div className="container mx-auto flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-2xl font-light">
            Simplify Your Study Experience
          </h1>
          <p className="opacity-70  mt-6 font-medium w-[500px] max-[550px]:w-full mx-auto text-[0.8rem]">
            Tired of reading long PDFs? Let us summarize it for you! Convert
            your texts into easy-to-listen audio and download them for later.
            Perfect for students who want to study smarter, not harder.
          </p>

          <Link
            to="#"
            className="inline-block px-8 py-3 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-md mt-12 text-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
} 

export default HeroSection;
