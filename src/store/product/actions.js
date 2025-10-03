import http from '@/utils/http';
import { actions as ui } from '@/store/ui';
import { GET_LIST, SET_LIST, SET_DETAIL, GET_DETAIL } from "./constants";

export const setList = (payload) => {
    return {
        type: SET_LIST,
        payload
    }
}
export const getList = (payload) => {
    return {
        type: GET_LIST,
        payload
    }
}
export function getDetail(slug) {
    return async (dispatch) => {
        dispatch({ type: GET_DETAIL });
        dispatch(ui.showLoading());

        try {
            const response = await http.get(`/products/${slug}`);
            dispatch(setDetail(response.data));
        } catch (error) {
            console.error('❌ Error getDetail', error);
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