const Banner = () => {
    return (
        <div className="py-4 lg:py-20 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
                <img src="./banner.svg" alt="" />
            </div>
            <div className="flex-1">
                <div className="lg:flex justify-center text-center md:text-right flex-col mb-5 sm:mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-gray-800 font-black leading-7 md:leading-10">
                    Build Stunning <br /><span className="text-[#2BA9E1]"> Websites </span> No Time
                    </h1>
                    <p className="mt-5 sm:mt-10  text-gray-400 font-normal  text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                </div>
                <div className="text-center md:text-right">
                    <button className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-black  transition duration-200 rounded-xl effect hovers">Browse free components</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;