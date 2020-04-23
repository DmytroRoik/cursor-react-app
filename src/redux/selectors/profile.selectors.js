const selectUserData = state => state.profileReducer.data;
const selectBalance = state => state.profileReducer.totalBalance;

export { selectUserData, selectBalance };
