const selectCategories = state => state.categoriesReducer.categories;

const selectName = state => state.categoriesReducer.name;
const selectDescription = state => state.categoriesReducer.description;
const selectIconId = state => state.categoriesReducer.iconId;

export { selectCategories, selectName, selectDescription, selectIconId };


