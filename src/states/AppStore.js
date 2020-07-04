import { createStore } from "redux";
import AllReducers from "../reducers/AllReducers";

const AppStore = createStore((state = AllReducers, action) => {
    if (typeof action === "object") {
        switch (action.type) {
            case "OVERRIDE_MESSAGE_HISTORY": // Download message history when opening a chat

                if (typeof action.data === "object") {
                    return { ...state, messageHistory: action.data };
                }

                break;
            case "ADD_TO_MESSAGE_HISTORY": // Add message to message history 

                if (typeof action.data === "object") {
                    return { ...state, messageHistory: { ...state.messageHistory, [action.data.id]: { ...action.data }} };
                }
            
                break;
            default:
                return state;
        }
    }
});

export default AppStore;