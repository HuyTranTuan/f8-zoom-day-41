import { useSelector } from "@/libs/react-redux";
import { getLoading } from "./selectors"

export const useLoading = () => {
    const loading = useSelector(getLoading);
    return loading;
};