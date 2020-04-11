const initialState = {
  categories: [
    {
      icon: 'fa fa-hamburger',
      name: 'Food',
      description: 'For all my food',
      date: '26/12/2019',
    },
    {
      icon: 'fa fa-tshirt',
      name: 'Clothes',
      description: '',
      date: '23/12/2019',
    },
    {
      icon: 'fa fa-utensils',
      name: 'Restouraunts',
      description: '',
      date: '22/12/2019',
    },
    {
      icon: 'fa fa-store-alt',
      name: 'Utility bills',
      description: '',
      date: '21/12/2019',
    },
    {
      icon: 'fa fa-paw',
      name: 'Pets',
      description: '',
      date: '21/12/2019',
    },
  ],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
