import { createSlice } from "@reduxjs/toolkit";
import { IDataStore } from "../../types/app";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    loading: false,
    error: null,
  } as IDataStore,
  reducers: {
    actionRequest: (state) => {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    importXMLSuccess: (state, { payload }: { payload: Partial<IDataStore> }) => {
      return {
        ...state,
        ...payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const { actionRequest, importXMLSuccess } = homeSlice.actions;

export default homeSlice.reducer;
