import { SAVE_MSGS_REQUEST, SAVE_MSGS_SUCCESS, SAVE_MSGS_FAILED, GET_MSGS_REQUEST, GET_MSGS_SUCCESS, GET_MSGS_FAILED, BOT_REQUEST, BOT_SUCCESS, BOT_FAILED } from "./actions";

const initialState = {
    bot:undefined,
    chatMessages: undefined,
    loading: false,
    getMsgs: [],
    error: undefined,
};

export default function botReducer(state = initialState, action) {

    switch ((action, action.type)) {



        case BOT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case BOT_SUCCESS:
            return {
                ...state,
                bot: action.payload,
                loading: false,
            };

        case BOT_FAILED:
            return {
                ...state,
                error: action.message,
                loading: false,
            };


        case SAVE_MSGS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case SAVE_MSGS_SUCCESS:
            return {
                ...state,
                chatMessages: action.payload,
                loading: false,
            };

        case SAVE_MSGS_FAILED:
            return {
                ...state,
                error: action.message,
                loading: false,
            };
            
        case GET_MSGS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_MSGS_SUCCESS:
            return {
                ...state,
                getMsgs: action.payload.data,
                loading: false,
            };

        case GET_MSGS_FAILED:
            return {
                ...state,
                error: action.message,
                loading: false,
            };


        default:
            return state;
    }
}
