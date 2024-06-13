import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-30 flex items-center justify-between py-6 pb-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 h-" src={logo} style={{height:150, width:200}} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div>
          <a href="https://www.linkedin.com/in/ashutosh-adhikari-6b8379258/">
          <FaLinkedin />
          </a>
        </div>
        <div>
        <a href="https://github.com/Ashutosh9110/">
          <FaGithub />
          </a>
        </div>
        <div>
        <a href="https://www.instagram.com/">
          <FaInstagram />
          </a>
        </div>
        <div>
        <a href="https://x.com/">
          <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

















// import logo from "../assets/kevinRushLogo.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";


// const Navbar = () => {
// return (
// <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
//     <div className="flex flex-shrink-0 items-center">
//     <img src={logo} alt="logo" />
//     </div>
//     <div className="m-8 flex item-center justify-center gap-4 text-2xl">
//         <FaLinkedin />
//         <FaGithub />
//         <FaInstagram />
//         <FaSquareXTwitter />
//     </div>

// </nav>
// );
// };

// export default Navbar;