import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user:UserReducer,
})
export type RootReducerType=ReturnType<typeof rootReducer>
export default rootReducer;