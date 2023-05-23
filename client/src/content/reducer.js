import { CHAT, CHAT_HISTORY, DASHBOARD, SETTINGS } from "./actions";

const initialState = {
    dashboard: false,
    chat: true,
    chatHistory: false,
    settings: false,
};

export default function dashboardReducer(state = initialState, action) {

    switch ((action, action.type)) {



        case DASHBOARD:
            return {
                ...state,
                dashboard: action.data,
                chat: false,
                chatHistory: false,
                settings: false,
            };

        case CHAT:
            console.log("red", action.data)
            return {
                ...state,
                chat: action.data,
                dashboard: false,
                chatHistory: false,
                settings: false,

            };

        case CHAT_HISTORY:
            return {
                ...state,
                chatHistory: action.data,
                dashboard: false,
                chat: false,
                settings: false,
            };


        case SETTINGS:
            return {
                ...state,
                settings: action.data,
                dashboard: false,
                chat: false,
                chatHistory: false,
            };





        default:
            return state;
    }
}
