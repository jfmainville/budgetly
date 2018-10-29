import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from './reducers';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, promise())
    );
}
