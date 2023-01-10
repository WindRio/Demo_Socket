// hooks businesss
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "@/actions";

export const useHooks = () => {
  const dispatch = useDispatch();

  const Items = useSelector((state) => state.itemCollection.list);

  const handleGetItems = () => {
    dispatch(itemActions.GetListRequest());
  };
  const handleCreateItem = (data) => {
    dispatch(itemActions.CreateListRequest(data));
  };
  const handleConnectSocket = (payload) => {
    dispatch(itemActions.socketRequest(payload));
  };
  return {
    Items,
    handleGetItems,
    handleCreateItem,
    handleConnectSocket,
  };
};
