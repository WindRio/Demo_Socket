import { actionTypes } from "@/constants";

const { itemTypes } = actionTypes;
const INITIAL_STATE = {
  list: [],
  isFetching: false,
  isError: false,
  message: "",
};

export default function itemCollectionReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case itemTypes.CREATE_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case itemTypes.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: payload.list,
        isError: false,
      };
    case itemTypes.CREATE_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    default:
      return state;
  }
}
