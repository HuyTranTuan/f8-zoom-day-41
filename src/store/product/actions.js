import http from '@/utils/http';
import { actions as ui } from '@/store/ui';
import { GET_LIST, SET_LIST, SET_DETAIL, GET_DETAIL } from "./constants";

export const setList = (payload) => {
    return {
        type: SET_LIST,
        payload
    }
}
export const getList = () => {
    return async (dispatch) => {
        dispatch({ type: GET_LIST });
        dispatch(ui.showLoading());

        try {
            const response = await http.get(`/products`);
            dispatch(setList(response.data.items));
        } catch (error) {
            throw new Error(`Error getList: ${error}`)
        } finally {
            dispatch(ui.hideLoading());
        }
    };
}
export function getDetail(slug) {
    return async (dispatch) => {
        dispatch({ type: GET_DETAIL });
        dispatch(ui.showLoading());

        try {
            const response = await http.get(`/products/${slug}`);
            dispatch(setDetail(response.data));
        } catch (error) {
            throw new Error(`Error getDetail: ${error}`)
        } finally {
            dispatch(ui.hideLoading());
        }
    };
}

export function setDetail(product) {
    return {
        type: SET_DETAIL,
        payload: product,
    };
}

const productAction = { setList, getList, getDetail, setDetail };
export default productAction;