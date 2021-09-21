import NoteReducer from "./NoteReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    note:NoteReducer,
})
export type RootReducerType=ReturnType<typeof rootReducer>
export default rootReducer;