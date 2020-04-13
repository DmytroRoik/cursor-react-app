const SWITCH_ENABLE = 'SWITCH_ENABLE';

const initialState = {
  isDeleteEnable: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ENABLE: {
      return {
        ...state, isDeleteEnable: !state.isDeleteEnable,
      };
    }

    default:
      return state;
  }
};

export const actionSwitchDelete = () => ({
  type: SWITCH_ENABLE,
});

export default categoriesReducer;
