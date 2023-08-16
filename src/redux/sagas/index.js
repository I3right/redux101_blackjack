import { all } from 'redux-saga/effects'
import cardWatcher from './card'

export default function* rootSaga() {
  yield  all([
    cardWatcher()
  ])
}