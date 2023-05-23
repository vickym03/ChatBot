export const DASHBOARD = "DASHBOARD"
export const CHAT = "CHAT"
export const CHAT_HISTORY = "CHAT_HISTORY"
export const SETTINGS = "SETTINGS"



export function dashboard(data) {

    return {
        type: DASHBOARD,
        data: data,
    };
}

export function chatsDash(data) {
    return {
        type: CHAT,
        data: data,
    };
}

export function chatHistory(data) {
    return {
        type: CHAT_HISTORY,
        data: data,
    };
}
export function settings(data) {
    return {
        type: SETTINGS,
        data: data,
    };
}

