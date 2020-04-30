const selectUserData = state => state.profileReducer.data;
const selectAvatars = state => state.profileReducer.avatars;

export { selectAvatars, selectUserData };
