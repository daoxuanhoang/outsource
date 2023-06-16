import { createSelector } from "@reduxjs/toolkit";
import { IAppState } from "../../types";


const selector = (state: { user: IAppState }) => state.user;

export const getError = createSelector(selector, ({ error }: IAppState) => error);

export const getAuthUser = createSelector(selector, app => app?.user);

export const getLoading = createSelector(selector, ({ loading }: IAppState) => loading);