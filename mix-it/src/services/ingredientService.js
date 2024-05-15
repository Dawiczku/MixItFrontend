// ingredientService.js
let selectedIngredients = [];

export const ingredientService = {
  setSelectedIngredients: (ingredients) => {
    selectedIngredients = ingredients;
  },
  getSelectedIngredients: () => {
    return selectedIngredients;
  },
  toggleIngredient: (ingredient) => {
    const index = selectedIngredients.indexOf(ingredient);
    if (index === -1) {
      selectedIngredients.push(ingredient);
    } else {
      selectedIngredients.splice(index, 1);
    }
    return selectedIngredients;
  }
};
