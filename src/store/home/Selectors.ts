import { createSelector } from "@reduxjs/toolkit";
import { IDataStore } from "../../types";


const selector = (state: { home: IDataStore }) => state.home;

export const getError = createSelector(selector, ({ error }: IDataStore) => error);
export const getData = createSelector(selector, ({ data }: IDataStore) => data);

export const getLoading = createSelector(selector, ({ loading }: IDataStore) => loading);