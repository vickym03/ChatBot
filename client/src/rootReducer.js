import { combineReducers } from "redux";
import botReducer from "./chat_Bot/reducer";
import dashboardReducer from "./content/reducer";

const rootReducer = combineReducers({
botReducer:botReducer,
dashboardReducer:dashboardReducer
});

export default rootReducer