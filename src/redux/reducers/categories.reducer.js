const SWITCH_ENABLE = 'SWITCH_ENABLE';
// const Delete = "Delete";

const initialState = {
  categories: [
    {
      id: 1,
      name: 'Food',
      description: 'meat',
      createdAt: '2020-04-12T09:52:40.225Z',
      updatedAt: '2020-04-12T09:52:40.225Z',
      icon: {
        id: 1,
        class: 'fa-hamburger',
        createdAt: '2020-04-11T21:56:55.099Z',
        updatedAt: '2020-04-11T21:56:55.099Z',
      },
    },
    {
      id: 2,
      name: 'stringyyy',
      description: 'stringhh',
      createdAt: '2020-04-12T17:16:54.401Z',
      updatedAt: '2020-04-12T17:16:54.401Z',
      icon: {
        id: 1,
        class: 'fa-hamburger',
        createdAt: '2020-04-11T21:56:55.099Z',
        updatedAt: '2020-04-11T21:56:55.099Z',
      },
    },
  ],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case Delete: {
    //   return {
    //     ...state, categoriesData: state.categoriesData.filter(item => item.id !== id)
    //   };
    // }

    default:
      return state;
  }
};
console.log(categoriesReducer);

export const actionSwitchDelete = () => ({
  type: SWITCH_ENABLE,
});
console.log(actionSwitchDelete);
// export const actionDeleteIten = (id) => ({
//   type: Delete,
//   payload: id,
// });

export default categoriesReducer;
