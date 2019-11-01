import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

//export const middlewares = [ReduxThunk, loggerMiddleware]
export const middlewares = [ReduxThunk]

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      ...middlewares
    )
  )
}
