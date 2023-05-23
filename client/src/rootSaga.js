import { all } from "@redux-saga/core/effects";

import { chatBotSaga, saveMsgsSaga, getMsgSaga } from "./chat_Bot/sagas";

export default function* rootSaga() {
  yield all([...chatBotSaga,
  ...saveMsgsSaga,
  ...getMsgSaga
  ]);
}
