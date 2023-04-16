import { combineReducers } from "redux";
import { homeReducer } from "../Modules/Home/Redux/HomeRedux";
import { applicationReducer } from "./ApplicationRedux";

export default combineReducers({
    application: applicationReducer,
    home: homeReducer
});