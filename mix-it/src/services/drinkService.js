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
    }
};

export default drinkService;
