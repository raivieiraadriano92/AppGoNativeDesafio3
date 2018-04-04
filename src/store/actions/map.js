export const addUser = payload => ({
  type: 'ADD_USER',
  payload,
});

export const showUserModal = payload => ({
  type: 'SHOW_USER_MODAL',
  payload,
});

export const hideUserModal = payload => ({
  type: 'HIDE_USER_MODAL',
  payload,
});
