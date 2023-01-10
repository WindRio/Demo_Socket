import { all } from "redux-saga/effects";
import itemSaga from "./item.saga";
import socketSaga from "./socket.saga";

export default function* rootSaga() {
  yield all([...itemSaga, ...socketSaga]);
}
