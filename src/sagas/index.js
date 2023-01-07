import { all } from "redux-saga/effects";
import { logInWatcher, refreshAccessTokenWatcher } from "./login";

export default function* rootSaga() {
    yield all([
        logInWatcher(),
        refreshAccessTokenWatcher()
    ]);
}