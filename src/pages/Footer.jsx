import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const links = [
  {url: "https://www.linkedin.com/in/anand-kumar96/",component: <FaLinkedin className="h-6 w-6 hover:animate-pulse" />},
  {url: "https://www.github.com/anand-kumar96/",component: <FaGithub className="h-6 w-6 hover:animate-pulse" />},
  {url: "https://www.leetcode.com/anand-kumar96/",component: <SiLeetcode className="h-6 w-6 hover:animate-pulse" />},
  {url: "https://www.instagram.com/re_born_01/",component: <FaInstagram className="h-6 w-6 hover:animate-pulse" />},
];
const footers = [
  {type: "Services",lists: ["Branding", "Design", "Marketing", "Advertisement"],},
  { type: "Company", lists: ["About us", "Contact", "Products", "Jobs"] },
  { type: "Legal", lists: ["Term of use", "Privacy policy", "Cookie policy"] },
];

const Footer = () => {
  return (
    <footer className=" bg-neutral text-neutral-content">
      <div className="footer justify-between align-element py-5">
        {footers.map((footer, index) => {
          const { type, lists } = footer;
          return (
            <nav key={index}>
              <h6 className="footer-title">{type}</h6>
              {lists.map((item, index) => {
                const link = item === 'About us'?'/about':item ==='Products'?'/products':'/'
                return (
                  <Link to={link} key={index} className="link link-hover">
                    {item}
                  </Link>
                )
              })}
            </nav>
          );
        })}
      </div>

      <footer className="bg-base-200">
        <div className="align-element footer px-10 py-2 border-t text-base-content border-base-300">
          <aside className="items-center grid-flow-col">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              Comfy Store Pvt Ltd. <br />
              Bringing comfort to you since 2023
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              {links.map((link, index) => (
                <Link key={index} to={link.url}>
                  {link.component}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
