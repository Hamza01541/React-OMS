import axios from "axios";
import { API_BASE_URL } from "../constants";
import { OrderI } from "../interfaces";


const orderService = {
    /**
     * Get order list
     * @returns 
     */
    getOrders: async () => {
        const url = `${API_BASE_URL}/orders`;
        const response = await axios.get<OrderI[]>(url);
        return response.data;
    },

    /**
     * Creates a new order
     * @param order 
     * @returns 
     */
    createOrder: async (order: OrderI) => {
        const url = `${API_BASE_URL}/orders`;
        const response = await axios.post(url, order);
        return response.data;
    },

    /**
     * Gets total Revenvue amount
     * @returns 
     */
    fetchTotalRevenue: async () => {
        const url = `${API_BASE_URL}/orders/total-revenue`;
        const response = await axios.get<any>();
        return response.data;
    }
};

export default orderService;