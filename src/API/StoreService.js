import Axios from "axios";
import {API_URL} from '../constants.js'
/**
 * This class is for interacting with the API for all store API calls
 */
class StoreService {
    /**
     * API Call to get store information
     * @returns {Promise} Promise for Return of store information 
     */
    getStoreInformation(store_id){
        return Axios.get(`${API_URL}/storeInfo/${store_id}`)
    }
    /**
     * API Call for updating the store infomation
     * @param {String} username 
     * @param {number} storeId 
     * @param {Object} data new product data
     * @returns {Promise} Promise for API Response
     */
    updateStoreInformation(username, storeId, data) {
        return Axios.put(`${API_URL}/store/${username}/storeInfo/${storeId}`, data)
    }
}

export default new StoreService();