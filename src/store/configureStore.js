import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducers from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import modalReducer from "../reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";
import { initSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducers,
      modals: modalReducer,
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  initSaga(sagaMiddleware);
  return store;
};
export default configureStore;
