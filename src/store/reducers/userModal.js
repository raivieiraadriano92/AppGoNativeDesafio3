const initialState = {
  coordinates: [],
  visible: false,
};

export default function userModal(state = initialState, action) {
  switch (action.type) {
    case 'SHOW':
      return {
        ...state,
        visible: true,
        coordinates: action.payload.coordinates,
      };
    case 'HIDE':
      return initialState;
    default:
      return state;
  }
}
