import { createStore, combineReducers, compose, applyMiddleware } from "react-redux";
import thunk from "redux-thunk";

const rootReducers = combineReducers({

});

let composeEnhanchers = compose;

const configureStore = () => {
    return createStore(rootReducers, composeEnhanchers(applyMiddleware(thunk)));
};

export default configureStore;