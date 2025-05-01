import { footerData } from "@/data/footer/index";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <div>
        <div>
          {footerData.copyrightYear}
          <a
            href={footerData.developer.links.github}
            target="_blank"
            rel="noreferrer"
          >
            {footerData.developer.name}
          </a>
        </div>
        <div>
          {" Made with "}
          <IoHeart />
          {" and "}
          <a href={footerData.technology.url} target="_blank" rel="noreferrer">
            {footerData.technology.name}
          </a>
        </div>
      </div>

      {/* go to top button */}
      <div>
        <button onClick={goToTop}>
          <FaArrowUpLong />
        </button>
      </div>
    </div>
  );
};

export default Footer;
