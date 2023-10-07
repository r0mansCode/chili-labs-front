import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Item, Data } from "../../models";

interface DataState {
  items: Item[];
  isLoading: boolean;
  error: string;
}

const initialState: DataState = {
  items: [],
  isLoading: false,
  error: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    itemsFetchingStart(state) {
      state.isLoading = true;
    },
    itemsFetchingSuccess(state, action: PayloadAction<Data>) {
      state.isLoading = false;
      state.error = "";
      state.items = action.payload.products;
    },
    itemsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const dataReducer = dataSlice.reducer;

const selecAllItems = (state: any) => state.dataReducer.items;

export const selectItemById = createSelector(
  [selecAllItems, (_selecAllItems, id) => id],
  (items, id) => {
    return items.find((item: Item) => item.id === Number(id));
  }
);

export default dataReducer;
