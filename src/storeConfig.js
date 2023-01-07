import { configureStore as configureStoreToolkit } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware
    ]

    const store = configureStoreToolkit({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: [...middlewares]
    });

    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore;