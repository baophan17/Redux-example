import * as testSaga from "./testSaga";

export function initSaga(sagaMiddleware) {
  Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
