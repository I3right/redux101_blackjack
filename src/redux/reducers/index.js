import blackJack from "./card";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cards: blackJack  // mapproptostate
})

export default rootReducer