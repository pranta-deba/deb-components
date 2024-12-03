import { AllContext } from "./AllContext";

const AllProviders = ({ children }) => {


    const value = { name: "raj" }
    
    return <AllContext.Provider value={value}>{children}</AllContext.Provider>
}

export default AllProviders;