import { IActionPayload } from "types/apis/api";


export const HomeActions = {
    IMPORT_XML: " IMPORT_XML",
    GET_DATA: 'GET_DATA'
};


export const importXMLActionsRequest = (
    payload: IActionPayload['payload'],
    callback?: IActionPayload['callback'],
) => ({
    payload,
    type: HomeActions.IMPORT_XML,
    callback,
});

export const getData = (
    payload: IActionPayload['payload'],
    callback?: IActionPayload['callback'],
) => ({
    payload,
    type: HomeActions.GET_DATA,
    callback,
});

