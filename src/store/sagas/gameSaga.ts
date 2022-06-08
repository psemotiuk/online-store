import {all, takeLatest, takeEvery, put, call, fork} from "redux-saga/effects";
import {GameActionTypes, IGame} from "../../types/gameTypes";
import {fetchGamesFail, fetchGamesRequest, fetchGamesSuccess} from "../actions/gameAction";
import {callApi} from "../../helpers/callApi";

const url = 'api/game'

function* fetchGamesSaga() {
    try {
        const response: Array<IGame> = yield call(callApi, url, 'GET')
        console.log('response', response)
        yield put(fetchGamesSuccess(response))
    } catch (e) {
        yield put(fetchGamesFail('error'))
    }
}

export function* fetchGames() {
    yield takeEvery(GameActionTypes.FETCH_GAMES, fetchGamesSaga)
}

export function* gamesSaga() {
    yield all([fork(fetchGames)])
}
