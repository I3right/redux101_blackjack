import { combineReducers } from "redux";
import blackJack from "./card";
import betting from "./bet";

const rootReducer = combineReducers({
    cards: blackJack,
    coins: betting,
})

export default rootReducer