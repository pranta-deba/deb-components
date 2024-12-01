import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Root = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-394.4px)] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;