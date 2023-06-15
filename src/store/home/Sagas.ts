import { takeEvery, put, all, select } from "redux-saga/effects";
import { HomeActions } from "./Actions";
import { IActionPayload } from "../../types/apis/api";
import { actionRequest, importXMLSuccess } from "./Reducers";
import { axiosClient } from "../../utils";
import { IResponse } from "../../types/user";

function* onImportXMLRequest(action: IActionPayload) {
    try {
        yield put(actionRequest());
        const result: IResponse["result"] = yield axiosClient.post(
            `${process.env.REACT_APP_GETWAY}`,
            action
        )
        yield put(importXMLSuccess(result))
        return action?.callback?.(result);
    } catch (e) {

    }
}

function* watchImportXLMActions() {
    yield takeEvery(
        HomeActions.IMPORT_XML as any,
        onImportXMLRequest
    );
}

export default function* homeSagas() {
    yield all([watchImportXLMActions()]);
}
