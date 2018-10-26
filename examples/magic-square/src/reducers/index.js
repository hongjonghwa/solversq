import { combineReducers } from 'redux'

import data from './data'
import setting from './setting'

const root = combineReducers({
  data, setting
})

export default root
