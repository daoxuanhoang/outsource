import { all, put, takeEvery } from "redux-saga/effects";
import { IResponse, IUser } from "../../types/user";
import { axiosClient } from "../../utils";
import { loginFailure, loginSuccess } from "./Reducers";
import { UserActions } from "./Actions";


function* loginRequest(action: any) {
    try {
        const result: IResponse["result"] = yield axiosClient.post(
            `${process.env.REACT_APP_GETWAY}`,
            JSON.stringify(action.formData)
        )

        if (result?.success) {
            const user: IUser = result.data;
            yield put(loginSuccess(user as any));
            return action.callback?.(result);
        }

        yield put(loginFailure(result?.message as any));
    } catch (error: any) {
        yield put(loginFailure(error));
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