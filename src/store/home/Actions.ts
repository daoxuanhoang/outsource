import { IActionPayload } from "types/apis/api";


export const HomeActions = {
    IMPORT_XML: " IMPORT_XML"
};


export const importXMLActionsRequest = (
    payload: IActionPayload['payload'],
    callback?: IActionPayload['callback'],
) => ({
    payload,
    type: HomeActions.IMPORT_XML,
    callback,
});

