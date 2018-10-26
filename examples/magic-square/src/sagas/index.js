// import { take, put, call, fork, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { put, select, takeLatest, all } from 'redux-saga/effects'
import { actions as dataActions } from '../reducers/data'
import { types as settingTypes, getSize, getStart, getStep } from '../reducers/setting'

/*
function * gridSwap () {
  // todo selector 함수 만들어야 해!
  const state = yield select()
  if (state.data.selected > 0){
    yield put(dataActions.swap())
  }
}

function * watchGridSelect () {
  yield takeLatest(dataTypes.SELECTOR_SET, gridSwap)
}
*/

function * dataInit () {
  let size = yield select(getSize)
  let start = yield select(getStart)
  let step = yield select(getStep)
  yield put(dataActions.initialize(size, start, step))
}

function * watchSettingChange () {
  yield takeLatest(settingTypes.SET_SIZE, dataInit)
  yield takeLatest(settingTypes.SET_START, dataInit)
  yield takeLatest(settingTypes.SET_STEP, dataInit)
}
function * sagaRun () {
  yield console.log('SAGA RUN')
}
export default function * root () {
  yield all([
    sagaRun(), watchSettingChange() //, watchGridSelect()
  ])
}
