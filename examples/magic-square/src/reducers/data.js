// Actions
export const types = {
  INITIALIZE: 'magic-square/data/INITIALIZE',
  SHUFFLE: 'magic-square/data/SHUFFLE',
  SELECTOR_SET: 'magic-square/data/SELECTOR_SET',
  SELECTOR_RESET: 'magic-square/data/SELECTOR_RESET'
}

// Initial state
const initialState = { data: [1, 2, 3, 4, 5, 6, 7, 8, 9], selected: -1 }

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Reducer
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.SHUFFLE: {
      let newData = [...state.data]
      for (let i = 0; i < newData.length - 1; ++i) {
        let r = generateRandom(i, newData.length - 1)
        // swap
        let t = newData[i]
        newData[i] = newData[r]
        newData[r] = t
      }
      return { ...state, data: newData }
    }
    case types.INITIALIZE: {
      const { size, start, step } = action.payload
      const len = size * size
      let newData = new Array(len)
      for (let i = 0; i < len; ++i) newData[i] = start + step * i
      return { data: newData, selected: -1 }
    // do reducer stuff
    }
    case types.SELECTOR_SET: {
      let newData = [...state.data]
      let nextSelect = action.payload
      let prevSelect = state.selected
      if (nextSelect === prevSelect) nextSelect = -1
      if (prevSelect > 0 && nextSelect > 0) {
        for (let i = 0; i < newData.length; ++i) {
          if (newData[i] === prevSelect) newData[i] = nextSelect
          else if (newData[i] === nextSelect) newData[i] = prevSelect
        }
        nextSelect = -1
      }
      return { data: newData, selected: nextSelect }
    }
    case types.SELECTOR_RESET: {
      let newData = [...state.data]
      return { data: newData, selected: -1 }
    }
    default:
      return state
  }
}

// Action Creators
export const actions = {
  initialize: (size, start, step) => ({ type: types.INITIALIZE, payload: { size, start, step } }),
  shuffle: () => ({ type: types.SHUFFLE }),
  selectorSet: (value) => ({ type: types.SELECTOR_SET, payload: value }),
  selectorReset: () => ({ type: types.SELECTOR_RESET })

}

// Selectors
