
const Components = () => {

    const handleFilter = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-4">
                <div className="text-center md:text-start">
                    <h1 className="text-gray-800 text-3xl font-bold">Components</h1>
                    <p className="text-gray-500">{"100"} components in {"14"} categories</p>
                </div>
                <div>
                    <input onKeyUp={handleFilter} type="text" placeholder="Filter Categories" className="p-2 outline-none border-none text-gray-500 effect-inner" />
                </div>
            </div>
        </div>
    );
};

export default Components;