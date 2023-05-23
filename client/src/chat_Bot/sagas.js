import { call, put, takeLatest } from "redux-saga/effects";
import { SAVE_MSGS_REQUEST, saveMessageSuccess, saveMessageFailed, GET_MSGS_REQUEST, getMessageSuccess, getMessageFailed, botSuccess, botFailed, BOT_REQUEST } from "./actions";
import { ChatbotApi } from "../api/ChatBotApi"

function* saveMsgs(action) {
    const { payload, error } = yield call(ChatbotApi.saveApi, action)
    if (payload) {
        yield put(saveMessageSuccess(payload))
    } else {
        yield put(saveMessageFailed(error))
    }

}

function* chatBot(action) {
    const { payload, error } = yield call(ChatbotApi.botApi, action);
    if (payload) {
        yield put(botSuccess(payload));
    } else {
        yield put(botFailed(error));
    }
}


function* getMsgs(action) {
    const { payload, error } = yield call(ChatbotApi.getMsgsApi, action);
    if (payload) {
        yield put(getMessageSuccess(payload));
    } else {
        yield put(getMessageFailed(error));
    }
}

export const saveMsgsSaga = [takeLatest(SAVE_MSGS_REQUEST, saveMsgs)];
export const chatBotSaga = [takeLatest(BOT_REQUEST, chatBot)];
export const getMsgSaga = [takeLatest(GET_MSGS_REQUEST, getMsgs)];

