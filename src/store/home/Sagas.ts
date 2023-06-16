import { all, put, takeEvery } from "redux-saga/effects";
import { IResponse, IUser } from "../../types/user";
import { axiosClient } from "../../utils";
import { INofifyState } from "../../types";
import { error } from "../notify";
import { HomeActions } from "./Actions";
import { actionRequest, importXMLSuccess } from "./Reducers";
import { IActionPayload } from "types/apis/api";

// POST Method
function* onImportXLMAction(action: IActionPayload) {
    console.log(action);
    
    try {
        yield put(actionRequest())
        yield put(importXMLSuccess(action))
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