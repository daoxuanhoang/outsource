import { all, put, takeEvery } from "redux-saga/effects";
import { IResponse, IUser } from "../../types/user";
import { axiosClient } from "../../utils";
import { INofifyState } from "../../types";
import { error, success } from "../notify";
import { HomeActions } from "./Actions";
import { actionRequest, importXMLSuccess, onGetDataSuccess } from "./Reducers";
import { IActionPayload } from "types/apis/api";

// POST Method
function* onImportXLMAction(action: IActionPayload) {
    try {
        yield put(actionRequest())
        const res: IResponse = yield axiosClient({
            headers: {
                "Content-Type": "multipart/form-data"
            },
            method: 'POST',
            url: `${process.env.REACT_APP_URL}/api/v1/uploadFiles`,
            data: action.payload.formData
        })
        if (res) {
            yield put(importXMLSuccess(res))
            yield put(success({ message: res.message } as INofifyState))
            return action.callback?.(res)
        }
        yield put(error({ message: 'lỗi' } as INofifyState))
    } catch (e) {
        console.log(`test`, e);
        yield put(error({ message: e } as INofifyState))
    }

}

function* onGetData(action: IActionPayload) {
    try {
        yield put(actionRequest())
        const { page, perPage, search } = action.payload.formData
        const res: IResponse = yield axiosClient.get(
            `${process.env.REACT_APP_URL}/api/v1/files?page=${page + 1}&perPage=${perPage}&search=${search}`
        )
        if (res) {
            const data = res;
            yield put((onGetDataSuccess(data)));
            return action.callback?.(data);
        }

        yield put(error({ message: 'Lỗi quá lỗi!' } as INofifyState));

    } catch (e) {
        console.log(e);
        yield put(error({ message: e } as INofifyState));

    }
}

function* watchImportXML() {
    yield takeEvery(HomeActions.IMPORT_XML, onImportXLMAction);
}

function* watchGetData() {
    yield takeEvery(HomeActions.GET_DATA, onGetData);
}



export default function* homeSagas() {
    yield all([
        watchImportXML(),
        watchGetData()
    ]);
}