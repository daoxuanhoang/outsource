import { all, put, takeEvery } from "redux-saga/effects";
import { IResponse, IUser } from "../../types/user";
import { axiosClient } from "../../utils";
import { loginFailure, loginSuccess } from "./Reducers";
import { UserActions } from "./Actions";
import { INofifyState } from "../../types";
import { error } from "../notify";


function* loginRequest(action: any) {
    console.log(action);

    try {
        const result: IResponse["result"] = yield axiosClient.post(
            `http://`,
            JSON.stringify(action.formData)
        )

        if (result?.success) {
            const user: IUser = result.data;
            yield put(loginSuccess(user as any));
            return action.callback?.(result);

        }

        yield put(loginFailure(result?.message as any));
        yield put(error({ message: 'lỗi' } as INofifyState));
    } catch (err: any) {
        yield put(loginFailure(err));
        yield put(error({ message: 'lỗi' } as INofifyState));
    }
}


function* watchLogin() {
    yield takeEvery(UserActions.LOGIN_REQUEST, loginRequest);
}


export default function* userSagas() {
    yield all([
        watchLogin(),
    ]);
}