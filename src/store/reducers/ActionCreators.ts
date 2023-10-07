import axios from "axios";
import { AppDispatch } from "../store";
import { dataSlice } from "./DataSlice";
import { Data } from "../../models";

const dataUrl = "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd";

export const fetchItems = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(dataSlice.actions.itemsFetchingStart());
    const response = await axios.get<Data>(dataUrl);
    dispatch(dataSlice.actions.itemsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(dataSlice.actions.itemsFetchingError(e.message));
  }
};
