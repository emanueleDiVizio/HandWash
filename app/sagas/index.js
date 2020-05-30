import { takeLatest } from 'redux-saga/effects'
import shiftSlice from '../state/shiftSlice'
import shiftSaga from './shiftSaga'

export default function* rootSaga() {
  yield takeLatest(shiftSlice.actions.startShift, shiftSaga)
}
