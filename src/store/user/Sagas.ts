import { all, put, takeEvery } from "redux-saga/effects";
import { IResponse, IUser } from "../../types/user";
import { axiosClient } from "../../utils";
import { loginFailure, loginSuccess } from "./Reducers";
import { UserActions } from "./Actions";
import { INofifyState } from "../../types";
import { error } from "../notify";


function* loginRequest(action: any) {
    try {
        const res: IResponse = yield axiosClient.post(
            `${process.env.REACT_APP_URL}/api/v1/login`,
            JSON.stringify(action.formData)
        )
        if (res?.success) {
            const user = res.data;
            yield put(loginSuccess(user as any));
            return action.callback?.(res);
        }
        yield put(loginFailure(res?.message as any));
        yield put(error({ message: res?.message } as INofifyState));
    } catch (e: any) {
        console.log(e);
        yield put(loginFailure(e));
        yield put(error({ message: e } as INofifyState));
    }
}

function* logoutRequest() {
    yield window.location.replace('/login');
}


function* watchLogin() {
    yield takeEvery(UserActions.LOGIN_REQUEST, loginRequest);
}

function* watchLogout() {
    yield takeEvery(UserActions.LOGOUT, logoutRequest);
}



export default function* userSagas() {
    yield all([
        watchLogin(),
        watchLogout()
    ]);
}