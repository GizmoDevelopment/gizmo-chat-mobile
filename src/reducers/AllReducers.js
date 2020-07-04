import { combineReducers } from "redux";
import UserSettingsReducer from "./UserSettingsReducer";

export default combineReducers({
    userSettings: UserSettingsReducer,
    messageHistory: {}
});