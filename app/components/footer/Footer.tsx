import { footerData } from "@/data/footer/index";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="flex items-center px-4 border-t backdrop-blur sm:px-8 border-border-primary">
      <div className="flex items-center py-3 w-full border-r border-border-primary sm:justify-center sm:gap-4">
        <div className="flex gap-2">
          {footerData.copyrightYear}
          <a
            className="link"
            href={footerData.developer.links.github}
            target="_blank"
            rel="noreferrer"
          >
            {footerData.developer.name}
          </a>
        </div>
        <div className="hidden gap-2 items-center pl-4 border-l border-border-primary sm:flex">
          {" Made with "}
          <IoHeart className="text-rose-400 flip" />
          {" and "}
          <a
            className="link"
            href={footerData.technology.url}
            target="_blank"
            rel="noreferrer"
          >
            {footerData.technology.name}
          </a>
        </div>
      </div>

      {/* go to top button */}
      <div className="flex justify-center items-center ml-4 h-full sm:ml-8">
        <button onClick={goToTop} className="px-4 cursor-pointer sm:px-0 link">
          <FaArrowUpLong />
        </button>
      </div>
    </div>
  );
};

export default Footer;
