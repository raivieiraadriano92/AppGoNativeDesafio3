const initialState = {
  visible: false,
};

export default function userModal(state = initialState, action) {
  switch (action.type) {
    case 'SHOW':
      return { ...state, visible: true };
    case 'HIDE':
      return { ...state, visible: false };
    default:
      return state;
  }
}
