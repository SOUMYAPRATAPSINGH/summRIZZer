import { logo } from "./assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center item-center flex-col">
      <nav className=" flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-14 object-contain bo" />

        <button onClick={() => window.open("#")} className="black_btn">
          Code
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">power of AI</span>
      </h1>
      <h2 className="desc lg:ml-48 lg:pl-24">
        Streamline your reading with Summarizerr, an open-source article
        summarizer that condenses long articles into concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
