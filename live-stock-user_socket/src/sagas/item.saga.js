import { takeLatest, put } from "redux-saga/effects";

import { itemActions } from "@/actions";
import { actionTypes } from "@/constants";
import { itemApi } from "@/api";


// function* handleGetItems({ payload }) {
//   try {
//     const res = yield itemApi.fetchList(null, null, null);
//     yield put(
//       itemActions.GetListSuccess({
//         list: res.listItem,
//       })
//     );
//   } catch (error) {
//     yield put(
//       itemActions.GetListFailure({
//         message: error.message,
//       })
//     );
//   }
// }

function* handleCreateItem({ payload }) {
  try {
    const res = yield itemApi.createItem(null, null, payload);
    yield put(
      itemActions.CreateListSuccess({
        message: res.message,
      })
    );
  } catch (error) {
    yield put(
      itemActions.CreateListFailure({
        message: error.message,
      })
    );
  }
}

const itemSaga = [
  // takeLatest(actionTypes.itemTypes.GET_ITEM_REQUEST, handleGetItems),
  takeLatest(actionTypes.itemTypes.CREATE_ITEM_REQUEST, handleCreateItem),
];

export default itemSaga;
