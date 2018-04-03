import { combineReducers } from 'redux';

import userModal from './userModal';
import map from './map';

export default combineReducers({
  userModal,
  map,
});
