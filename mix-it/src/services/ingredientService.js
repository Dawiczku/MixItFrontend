let selectedIngredients = [];

export const ingredientService = {
  setSelectedIngredients: (ingredients) => {
    selectedIngredients = ingredients;
  },
  getSelectedIngredients: () => {
    return selectedIngredients;
  }
};
