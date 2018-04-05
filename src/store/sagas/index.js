import { all, takeLatest } from 'redux-saga/effects';

import { Types as MapTypes } from 'store/ducks/map';
import { saveUserRequest } from './map';

export default function* rootSagareturn() {
  return yield all([
    takeLatest(MapTypes.SAVE_USER_REQUEST, saveUserRequest),
  ]);
}
