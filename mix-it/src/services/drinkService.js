import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; 

const drinkService = {
    getDrinks: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/recipes/all`);
            return response.data;
        } catch (error) {
            console.error("Error fetching drinks:", error);
            throw error;
        }
    },
    getDrinkById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/recipes/byId/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching drink with ID ${id}:`, error);
            throw error;
        }
    },
    searchDrinkByName: async (name) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/recipes/byName/${name}`);
            return response.data;
        } catch (error) {
            console.error(`Error searching for drink with name ${name}:`, error);
            throw error;
        }
    },
    getFlavors: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/recipes/flavors`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching flavors`, error);
            throw error;
        }
    }
};


export default drinkService;
