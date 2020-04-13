const SWITCH_ENABLE = 'SWITCH_ENABLE';
// const Delete = "Delete";

const initialState = {
  isDeleteEnable: false,
  // categoriesData: []
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ENABLE: {
      return {
        ...state, isDeleteEnable: !state.isDeleteEnable,
      };
    }
    // case Delete: {
    //   return {
    //     ...state, categoriesData: state.categoriesData.filter(item => item.id !== id)
    //   };
    // }

    default:
      return state;
  }
};

export const actionSwitchDelete = () => ({
  type: SWITCH_ENABLE,
});

// export const actionDeleteIten = (id) => ({
//   type: Delete,
//   payload: id,
// });

export default categoriesReducer;
