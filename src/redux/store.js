import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import blackJack from "./reducers/card";

const store = createStore (
    blackJack,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store