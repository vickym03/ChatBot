export const SAVE_MSGS_REQUEST = "SAVE_MSGS_REQUEST";
export const SAVE_MSGS_SUCCESS = "SAVE_MSGS_SUCCESS";
export const SAVE_MSGS_FAILED = "SAVE_MSGS_FAILED";


export const GET_MSGS_REQUEST = "GET_MSGS_REQUEST";
export const GET_MSGS_SUCCESS = "GET_MSGS_SUCCESS";
export const GET_MSGS_FAILED = "GET_MSGS_FAILED";


export const BOT_REQUEST = "BOT_REQUEST"
export const BOT_SUCCESS = "BOT_SUCCESS"
export const BOT_FAILED = "BOT_FAILED"



export function botRequest(chats) {
    return {
        type: BOT_REQUEST,
        chats: chats,
    };
}

export function botSuccess(data) {
    return {
        type: BOT_SUCCESS,
        payload: data,
    };
}

export function botFailed(error) {
    return {
        type: BOT_FAILED,
        payload: error,
    };
}




export function saveMessageRequest(chats) {
    return {
        type: SAVE_MSGS_REQUEST,
        chats: chats,
    };
}

export function saveMessageSuccess(data) {
    return {
        type: SAVE_MSGS_SUCCESS,
        payload: data,
    };
}

export function saveMessageFailed(error) {
    return {
        type: SAVE_MSGS_FAILED,
        payload: error,
    };
}




export function getMessageRequest() {

    return {
        type: GET_MSGS_REQUEST,

    };
}

export function getMessageSuccess(data) {
    return {
        type: GET_MSGS_SUCCESS,
        payload: data,
    };
}

export function getMessageFailed(error) {
    return {
        type: GET_MSGS_FAILED,
        payload: error,
    };
}
