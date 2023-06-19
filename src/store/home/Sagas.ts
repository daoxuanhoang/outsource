import { all, put, takeEvery } from "redux-saga/effects";
import { IResponse, IUser } from "../../types/user";
import { axiosClient } from "../../utils";
import { INofifyState } from "../../types";
import { error, success } from "../notify";
import { HomeActions } from "./Actions";
import { actionRequest, importXMLSuccess } from "./Reducers";
import { IActionPayload } from "types/apis/api";

// POST Method
function* onImportXLMAction(action: IActionPayload) {
    try {
        yield put(actionRequest())
        console.log('sss');

        yield put(importXMLSuccess(action))
        yield put(success({ message: 'success' } as INofifyState))
    } catch (error) {

    }

}

function* watchImportXML() {
    yield takeEvery(HomeActions.IMPORT_XML, onImportXLMAction);
}


export default function* homeSagas() {
    yield all([
        watchImportXML(),
    ]);
}