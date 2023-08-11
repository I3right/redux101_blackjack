import blackJack from "./card";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cards:blackJack  
})

export default rootReducer