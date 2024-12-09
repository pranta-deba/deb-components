import { useState } from "react";
import Loaders from "../../components/ui/loaders/Loaders";

const Components = () => {
    const [item, setItem] = useState('');

    const handleFilter = (e) => {
        console.log(e.target.value);
    }
    const handleClickButton = (item) => {
        setItem(item);
    }

    return (
        <div className="space-y-2 md:space-y-10">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-4 mb-8 md:mb-20">
                <div className="text-center md:text-start">
                    <h1 className="text-gray-800 text-3xl font-bold">Components</h1>
                    <p className="text-gray-500">{"100"} components in {"14"} categories</p>
                </div>
                <div>
                    <input onKeyUp={handleFilter} type="text" placeholder="Filter Categories" className="p-2 outline-none border-none text-gray-500 effect-inner rounded-md" />
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 flex-wrap effect-inner p-4 md:p-6 rounded-md">
                {
                    categories.map((cat, i) => <button key={i + 1} onClick={() => handleClickButton(cat)} className={`${item === cat ? "effect-inner text-[#2BA9E1]" : "effect"} hovers p-2 rounded-md capitalize font-semibold text-xs md:text-base`}>{cat}</button>)
                }
            </div>
            {!item && <div className="effect-inner p-4 md:p-6 rounded-md">
                <div className="flex flex-col justify-center items-center">
                    <div className="space-x-4 mb-4">
                        <button className="effect hovers p-2 rounded-md capitalize">Github</button>
                        <button className="effect hovers p-2 rounded-md capitalize">Feedback</button>
                    </div>
                    <img src="./banner.svg" alt="" className="" />
                </div>
            </div>}

            {item === "loaders" && <Loaders />}

        </div>
    );
};

const categories = [
    "accordions",
    "badges",
    "banners",
    "burgers",
    "buttons",
    "cards",
    "carousels",
    "charts",
    "checkboxes",
    "controls",
    "dropdowns",
    "footers",
    "inputs",
    "loaders",
    "logins",
    "menus",
    "modals",
    "navbars",
    "paginations",
    "parallax",
    "scrolling",
    "shadows",
    "sidebars",
    "signups",
    "stickys",
    "switches",
    "tables",
    "tooltips",
    "widgets"
]

export default Components;