import { all, put, takeEvery } from 'redux-saga/effects';
import { openModal, closeModal } from './Reducers';
import { ModalActions } from './Actions';

function* showModal(action: any) {
  yield put(openModal(action.payload));
}

function* hideModal() {
  yield put(closeModal());
}


function* watchShowModalAction() {
    yield takeEvery(ModalActions.SHOW_MODAL, showModal);
  }

  function* watchHideModalAction() {
    yield takeEvery(ModalActions.HIDE_MODAL, hideModal);
  }

  export default function* modalSagas() {
    yield all([watchShowModalAction(), watchHideModalAction()]);
  }