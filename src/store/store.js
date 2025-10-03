import { 
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import productReducer from "./product/reducer.js";
import uiReducer from "./ui/reducer";

const rootReducer = combineReducers({
    products: productReducer,
    ui: uiReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

window.store = store;

export default store;