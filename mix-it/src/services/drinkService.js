import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/recipes"; 

const drinkService = {
    getDrinks: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/all`);
            return response.data;
        } catch (error) {
            console.error("Error fetching drinks:", error);
            throw error;
        }
    },
    getDrinkById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/byId/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching drink with ID ${id}:`, error);
            throw error;
        }
    },
    searchDrinkByName: async (name) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/byName/${name}`);
            return response.data;
        } catch (error) {
            console.error(`Error searching for drink with name ${name}:`, error);
            throw error;
        }
    },
    getFlavors: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/flavors`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching flavors`, error);
            throw error;
        }
    },
    getDrinksByFlavor: async (flavor) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/byFlavor/${flavor}`);
            return response.data;
        } catch (error) {
            throw Error("Error fetching drinks by flavor");
        }
    },
    getIngredients: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/ingredients`);
            return response.data;
        } catch (error) {
            console.error("Error fetching all ingredients:", error);
            throw error;
        }
    },
    getRecipesByIngredients: async (ingredients) => {
        try {
            const params = ingredients.map(ingredient => `name=${encodeURIComponent(ingredient)}`).join('&');
            const response = await axios.get(`${API_BASE_URL}/byIngredient?${params}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching recipes by ingredients:", error);
            throw error;
        }
    }
};


export default drinkService;
