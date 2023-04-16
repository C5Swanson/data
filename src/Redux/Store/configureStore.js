import { applyMiddleware, compose, createStore } from "redux";
import { default as rootReducer } from "../Reducer"; 
import thunkMiddleware from "redux-thunk";

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware
            ),
            (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
        )
    );

    return store;
}