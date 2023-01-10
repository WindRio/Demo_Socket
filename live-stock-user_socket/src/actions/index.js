import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "@/constants";

export const authActions = {
  loginRequest: createAction(actionTypes.authTypes.LOGIN_REQUEST),
  loginSuccess: createAction(actionTypes.authTypes.LOGIN_SUCCESS),
  loginFailure: createAction(actionTypes.authTypes.LOGIN_FAILURE),
  logoutRequest: createAction(actionTypes.authTypes.LOGOUT_REQUEST),
  logoutSuccess: createAction(actionTypes.authTypes.LOGOUT_SUCCESS),
  logoutFailure: createAction(actionTypes.authTypes.LOGOUT_FAILURE),
};

export const itemActions = {
  GetListRequest: createAction(actionTypes.itemTypes.GET_ITEM_REQUEST),
  GetListSuccess: createAction(actionTypes.itemTypes.GET_ITEM_SUCCESS),
  GetListFailure: createAction(actionTypes.itemTypes.GET_ITEM_FAILURE),

  CreateListRequest: createAction(actionTypes.itemTypes.CREATE_ITEM_REQUEST),
  CreateListSuccess: createAction(actionTypes.itemTypes.CREATE_ITEM_SUCCESS),
  CreateListFailure: createAction(actionTypes.itemTypes.CREATE_ITEM_FAILURE),

  socketRequest: createAction(actionTypes.itemTypes.SOCKET_REQUEST),
  socketSuccess: createAction(actionTypes.itemTypes.SOCKET_SUCCESS),
  socketFailure: createAction(actionTypes.itemTypes.SOCKET_FAILURE),
};
