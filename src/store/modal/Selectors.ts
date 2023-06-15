import { createSelector } from "@reduxjs/toolkit";

const selector = (state: { modal: any }) => {
    return state.modal
};

export const isOpen = createSelector(selector, (modal: any) => modal?.isOpen);
export const content = createSelector(selector, (modal: any) => modal?.content);


