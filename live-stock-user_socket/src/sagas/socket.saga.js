import {
  take,
  put,
  call,
  apply,
  delay,
  fork,
  takeLatest,
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";

import { itemActions } from "@/actions";
import { actionTypes } from "@/constants";
import socketServer from "@/utils/hooks/useSocket";

function createSocketChannel(socket) {
  return eventChannel((emit) => {
    const loadDataHandler = (event) => {
      emit(event);
    };

    const errorHandler = (errorEvent) => {
      emit(new Error(errorEvent.reason));
    };
    socket.connect();
    socket.on("connect", () => {
      console.log(socket.id, "Connecting...");
    });
    socket.on("loadData", loadDataHandler);
    socket.on("error", errorHandler);
    const unsubscribe = () => {
      socket.disconnect();
      console.log(socket.disconnected, "Disconnect.");
    };

    return unsubscribe;
  });
}
function* getData(socket) {
  // yield delay(5000);
  yield apply(socket, socket.emit, ["getData"]);
}

export function* handleGetData({ payload }) {
  const socketChannel = yield call(createSocketChannel, socketServer);

    if (!payload) socketChannel.close()

    try {
      const res = yield take(socketChannel);
      yield fork(getData, socketServer);
    } catch (err) {
      console.error("socket error:", err);
    }
}

const socketSaga = [
  takeLatest(actionTypes.itemTypes.SOCKET_REQUEST, handleGetData),
];

export default socketSaga;
