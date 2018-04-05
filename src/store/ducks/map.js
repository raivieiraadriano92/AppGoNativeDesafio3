export const Types = {
  SAVE_USER_REQUEST: 'map/SAVE_USER_REQUEST',
  SAVE_USER_SUCCESS: 'map/SAVE_USER_SUCCESS',
  SAVE_USER_ERROR: 'map/SAVE_USER_ERROR',
  SHOW_USER_MODAL: 'map/SHOW_USER_MODAL',
  HIDE_USER_MODAL: 'map/HIDE_USER_MODAL',
};

const initialState = {
  coordinatesSelected: [],
  userModalVisible: false,
  saving: false,
  errorOnSave: null,
  users: [],
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_USER_REQUEST:
      return {
        ...state,
        saving: true,
      };
    case Types.SAVE_USER_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users,
          {
            ...action.payload.user,
            coordinates: state.coordinatesSelected,
          },
        ],
        coordinates: [],
        userModalVisible: false,
        saving: false,
      };
    case Types.SAVE_USER_ERROR:
      return {
        ...state,
        errorOnSave: action.payload.message,
        saving: false,
      };
    case Types.SHOW_USER_MODAL:
      return {
        ...state,
        userModalVisible: true,
        coordinatesSelected: action.payload.coordinatesSelected,
      };
    case Types.HIDE_USER_MODAL:
      return {
        ...state,
        userModalVisible: false,
        coordinatesSelected: [],
        errorOnSave: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  saveUserRequest: userName => ({
    type: Types.SAVE_USER_REQUEST,
    payload: {
      userName,
    },
  }),

  saveUserSuccess: user => ({
    type: Types.SAVE_USER_SUCCESS,
    payload: {
      user,
    },
  }),

  saveUserError: message => ({
    type: Types.SAVE_USER_ERROR,
    payload: {
      message,
    },
  }),

  showUserModal: coordinatesSelected => ({
    type: Types.SHOW_USER_MODAL,
    payload: {
      coordinatesSelected,
    },
  }),

  hideUserModal: () => ({
    type: Types.HIDE_USER_MODAL,
    payload: {},
  }),

};
