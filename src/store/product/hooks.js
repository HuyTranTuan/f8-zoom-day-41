import { useSelector } from "@/libs/react-redux";
import { getList, getDetail } from "./selectors"

export const useList = () => {
    const products = useSelector(getList);
    return products;
}

export const useDetail = () => {
    const productDetail = useSelector(getDetail);
    return productDetail;
};