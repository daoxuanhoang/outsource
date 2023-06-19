/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { INofifyState } from '../../types';


const initialState: INofifyState = {
  message: '',
  type: 'info',
  options: {
    position: {
      horizontal: 'center',
      vertical: 'top',
    },
    autoHideDuration: 3000,
  },
};

const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    show: (state, { payload }: { payload: INofifyState }) => {
      return {
        ...state,
        message: payload.message,
        type: payload.type || 'info',
        options: {
          ...state.options,
        },
      };
    },
    info: (state, { payload }: { payload: INofifyState }) => {
      return {
        ...state,
        message: payload.message,
        type: 'info',
        options: {
          ...state.options,
        },
      };
    },
    success: (state, { payload }: { payload: INofifyState }) => {
      return {
        ...state,
        message: payload.message,
        type: 'success',
        options: {
          ...state.options,
        },
      };
    },
    error: (state, { payload }: { payload: INofifyState }) => {
      return {
        ...state,
        message: payload.message,
        type: 'error',
        options: {
          ...state.options,
        },
      };
    },
    warning: (state, { payload }: { payload: INofifyState }) => {
      return {
        ...state,
        message: payload.message,
        type: 'warning',
        options: {
          ...state.options,
        },
      };
    },
    hide: state => {
      return {
        ...state,
        message: '',
      };
    },
  },
});

export const { hide, error, info, warning, success, show } = notifySlice.actions;

export default notifySlice.reducer;
