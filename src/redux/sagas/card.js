import { call, put, select, takeEvery} from "redux-saga/effects";
import axios from "axios";

import { GET_START_GAME, GET_DRAW_CARD, GET_END_GAME } from "../actions/card";
import { SET_START_GAME, SET_DRAW_CARD, SET_END_GAME } from "../actions/card";

async function fetchCard(payload) {
  try {
    console.log('payload fetch cards', payload);
    const url = `http://localhost:3001/api${payload.endpoint}`;
    const res = await axios.post(url, payload.username);
    return res.data;
  } catch (error) {
    throw error;
  }
}

// Worker function Logical Part
function* onStartGame(action) {
  try {
    const data = yield call(fetchCard, { username:{username:action.payload} , endpoint: '/start'});
    yield put ({type:SET_START_GAME, payload: data})
  } catch (error) {
    console.log(error);
  }
}

function* onDrawCard() {
  try {
    const username = yield select(state => state.cards.player.username);
    const data = yield call(fetchCard, { username:{username:username} , endpoint: '/hit'});
    yield put ({type:SET_DRAW_CARD, payload: data})
  } catch (error) {
    console.log(error);
  }
}

function* onEndGame() {
  try {
    const username = yield select(state => state.cards.player.username);
    const data = yield call(fetchCard, { username:{username:username}  , endpoint: '/stand'});
    yield put ({type:SET_END_GAME, payload: data})
  } catch (error) {
    console.log(error);
  }
}

// watcher -> watch on function which one is working onlywork when action is matched
export default function* cardWatcher() {
    yield takeEvery(GET_START_GAME,onStartGame)
    yield takeEvery(GET_DRAW_CARD,onDrawCard)
    yield takeEvery(GET_END_GAME,onEndGame)
}
