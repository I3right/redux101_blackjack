import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./reducers/card";

const store = createStore (
    taskReducer,
    composeWithDevTools()
);

export default store