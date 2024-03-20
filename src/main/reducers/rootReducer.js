import threeOhOneReducer from "./threeOhOneReducer";
import {combineReducers} from "redux";
import uiReducer from "./uiReducer";
import cricketReducer from "./cricketReducer";

const rootReducer = combineReducers({
    threeOhOne: threeOhOneReducer,
    ui: uiReducer,
    cricket: cricketReducer,
});

export default rootReducer;