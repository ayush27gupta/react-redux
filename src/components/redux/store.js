import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
