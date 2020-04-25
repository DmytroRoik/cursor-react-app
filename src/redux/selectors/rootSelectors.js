const selectBalance = state => state.rootReducer.totalBalance;
const selectUserData = state => state.profileReducer.data;
const selectSwitchName = state => state.rootReducer.switchName;
const selectIcons = state => state.rootReducer.icons;

export { selectBalance, selectSwitchName, selectIcons, selectUserData };
