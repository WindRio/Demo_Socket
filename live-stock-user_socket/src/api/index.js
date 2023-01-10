import { Helpers } from "@/utils";
import ApiScheme from "./@scheme";

export const itemApi = {
  fetchList: Helpers.createApi(ApiScheme.ITEMS.GET_LIST),
  createItem: Helpers.createApi(ApiScheme.ITEMS.CREATE),
};
