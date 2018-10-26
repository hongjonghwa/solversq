import { createSelector } from 'reselect'

// Actions
export const types = {
  SET_SIZE: 'magic-square/setting/SET_SIZE',
  SET_START: 'magic-square/setting/SET_START',
  SET_STEP: 'magic-square/setting/SET_STEP'
}

// Initial state
const initialState = {
  size: 3,
  start: 1,
  step: 1
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SIZE:
      return { ...state, size: action.payload }
    case types.SET_START:
      return { ...state, start: action.payload }
    case types.SET_STEP:
      return { ...state, step: action.payload }
    default:
      return state
  }
}

// Action Creators
export const actions = {
  setSize: (value) => ({ type: types.SET_SIZE, payload: value }),
  setStart: (value) => ({ type: types.SET_START, payload: value }),
  setStep: (value) => ({ type: types.SET_STEP, payload: value })
}

// Selectors
export const getSize = (state) => state.setting.size
export const getStart = (state) => state.setting.start
export const getStep = (state) => state.setting.step

export const getCorrectSum = createSelector(
  [ getSize, getStart, getStep ],
  (size, start, step) => {
    let sum = 0
    let v = start
    for (let i = 0; i < size * size; ++i) {
      sum += v
      v += step
    }
    sum /= size
    return sum
  }
)
