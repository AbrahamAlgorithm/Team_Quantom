import { MdUploadFile } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <HeroSection />

      <div className="w-[1024px] mx-auto mt-[3em] mb-[1.5em]">
        <h2 className="text-3xl opacity-60">How to use DocTrim</h2>
        <p className="text-sm opacity-75 mt-2">
          Easily using DocTrim in three simple steps:
        </p>

        <div className="mt-12 grid grid-cols-3 gap-12">
          <div className="shadow p-6 border-2 border-slate-100 rounded-3xl h-max">
            <h3 className="font-medium text-lg opacity-90">
              1. Upload your PDF
            </h3>
            <p className="mt-4 text-sm font-light opacity-80">
              Drag and drop your PDF file into the AI PDF Summarizer, or enter
              the PDF URL. You can also upload directly from Google Drive
              (coming soon).
            </p>
          </div>

          <div className="shadow p-6 border-2 border-slate-100 rounded-3xl h-max">
            <h3 className="font-medium text-lg opacity-90">
              2. Upload your PDF
            </h3>
            <p className="mt-4 text-sm font-light opacity-80">
              DChoose from a range of AI-powered features such as summarizing
              the PDF document, extracting PDF to text, ask your PDF or chat PDF
              with AI, translating PDF content, generating mind maps from PDF,
              or read PDF with the AI PDF Reader.
            </p>
          </div>

          <div className="shadow p-6 border-2 border-slate-100 rounded-3xl h-max">
            <h3 className="font-medium text-lg opacity-90">
              3. Upload your PDF
            </h3>
            <p className="mt-4 text-sm font-light opacity-80">
              Save the summarized content, extracted text, or generated mind
              maps. You can also share your results with friends or colleagues
              for collaborative learning and discussion.
            </p>
          </div>
        </div>

        <div className="mt-[5em] h-max py-12 rounded-3xl hover:bg-blue-50 transition-all duration-300 p-6 border border-spacing-10 border-dashed border-blue-500 flex items-center justify-center flex-col gap-4">
          <span className="text-5xl">
            <MdUploadFile color="" />
          </span>

          <p className="opacity-80">Drap and Drop a file</p>

          <div className="flex items-center gap-2">
            <hr className="w-[200px]" />
            <span className="text-blue-300">or</span>
            <hr className="w-full" />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white py-3 px-8 rounded-md text-sm flex items-center gap-2">
            <span className="">
              <GoPlus size={20} />
            </span>
            <span>Choose a file</span>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
