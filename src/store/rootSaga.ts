import { all } from 'redux-saga/effects'
import modalSagas from './modal/Sagas'
import homeSagas from './home/Sagas'
import userSagas from './user/Sagas'

export default function* rootSaga() {
    yield all([modalSagas(), userSagas(), homeSagas()])
}