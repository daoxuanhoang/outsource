import { createSlice } from "@reduxjs/toolkit";
import { IDataStore } from "types";


const homeSlice = createSlice({
    name: 'home',
    initialState: {
        loading: false,
        error: null,
        data: null
    },
    reducers: {
        actionRequest: state => {
            return {
                ...state,
                error: null,
                loading: false
            }
        },
        importXMLSuccess: (state, { payload }) => {
            return {
                ...state,
                data: payload,
                error: null,
                loading: false
            }
        },
        importXMLFailure: (state, { payload }: any) => {
            return {
                ...state,
                error: payload,
                loading: false
            }
        }
    }
})

export const { actionRequest, importXMLSuccess, importXMLFailure } = homeSlice.actions

export default homeSlice.reducer