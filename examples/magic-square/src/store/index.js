import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'
import saga from '../sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)
// const store = createStore(reducer, initialState, enhancer)
const store = createStore(rootReducer, composeEnhancers(enhancer))

// store.runSaga = sagaMiddleware.run
sagaMiddleware.run(saga)
store.close = () => store.dispatch(END)

export default store
