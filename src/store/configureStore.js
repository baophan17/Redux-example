import { combineReducers, createStore } from "redux";
import entriesReducers from "../reducers/entries.reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import modalReducer from "../reducers/modals.reducers";
const configureStore = () => {
    console.log('redux: ', composeWithDevTools);
    return createStore(
        combineReducers({
            entries: entriesReducers,
            modals: modalReducer,
        }),
        composeWithDevTools()

    );
}
export default configureStore;