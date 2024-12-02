import { FaAngular, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Compatible = () => {
    return (
        <div className="my-12">
            <h1 className="text-center text-gray-800 text-3xl font-bold">Compatible with</h1>
            <div className="flex justify-center items-center flex-wrap gap-2 md:gap-32 mt-10">
                <FaHtml5 size={60} className="p-2 rounded-lg effect-inner hovers2 cursor-pointer"/>
                <FaReact size={60} className="p-2 rounded-lg effect-inner hovers2 cursor-pointer"/>
                <FaVuejs size={60} className="p-2 rounded-lg effect-inner hovers2 cursor-pointer"/>
                <SiNextdotjs size={60} className="p-2 rounded-lg effect-inner hovers2 cursor-pointer"/>
                <FaAngular size={60} className="p-2 rounded-lg effect-inner hovers2 cursor-pointer"/>
            </div>
        </div>
    );
};

export default Compatible;