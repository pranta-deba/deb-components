import { useContext } from "react";
import { AllContext } from "../providers/AllContext";

const useAllProviders = () => {
    const all = useContext(AllContext);
    return all
};

export default useAllProviders;