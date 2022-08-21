import { CounterReducer } from "./CounterReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counter: CounterReducer,
});
