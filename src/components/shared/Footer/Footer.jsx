import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    

    return (
        <footer className="effect-inner">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0  gap-4 ">
                    <div className="">
                        <Link
                            to="/"
                            className="inline-flex items-center"
                        >
                            <svg
                                className="w-8 text-deep-purple-accent-400"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                            >
                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                Deb Components
                            </span>
                        </Link>
                        <p className="my-4 md:pr-4 lg:max-w-[600px]">Weve got 100+ building blocks that can help you create almost any type of a website with just a couple of clicks.</p>
                    </div>
                    <div className="flex justify-between gap-4 md:gap-10">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold">Quick links</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link className="hover:underline" to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link className="hover:underline" to={"/components"}>Components</Link>
                                </li>
                                <li>
                                    <Link className="hover:underline" to={"/templates"}>Templates</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold">Resources</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link className="hover:underline" to={"/documentation"}>Documentation</Link>
                                </li>
                                <li>
                                    <Link className="hover:underline" to={"/"}>Contact us</Link>
                                </li>
                                <li>
                                    <Link className="hover:underline" to={"/"}>Star us on GitHub</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between  items-center flex-wrap">
                    <div className="py-6 text-sm dark:text-gray-600">© {new Date().getFullYear()} Deb Components All rights reserved.</div>
                    <div>
                        <div className="flex justify-start space-x-3">
                            <Link to={"/"} title="GitHub"><FaGithub size={30} /></Link>
                            <Link to={"/"} title="GitHub"><FaLinkedin size={30} /></Link>
                            <Link to={"/"} title="GitHub"><FaTwitter size={30} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;