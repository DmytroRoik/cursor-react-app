const selectBalance = state => state.rootReducer.balance;
const selectUserDataName = state => state.rootReducer.data.name;
const selectUserDataMail = state => state.rootReducer.data.email;
const selectSwitchName = state => state.rootReducer.switchName;
const selectIcons = state => state.rootReducer.icons;

export { selectBalance, selectSwitchName,
  selectIcons, selectUserDataName, selectUserDataMail };
