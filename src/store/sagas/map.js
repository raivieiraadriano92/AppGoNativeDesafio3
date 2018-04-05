import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as MapActions } from 'store/ducks/map';

export function* saveUserRequest(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.userName}`);

    const users = yield select(state => state.map.users);

    if (users.find(user => user.id === data.id)) {
      yield put(MapActions.saveUserError('Usuário duplicado'));
    } else {
      yield put(MapActions.saveUserSuccess({
        id: data.id,
        name: data.name,
        bio: data.bio,
        avatar: data.avatar_url,
      }));
    }
  } catch (err) {
    yield put(MapActions.saveUserError('Usuário não existe'));
  }
}
