import Axios from "axios";
import {API_URL} from '../constants.js'

/**
 * This class is for interacting with the API for all Product API calls
 */
class ProductService {
    /**
     * API Call for all Products
     * @returns {Promise} Promise for Return of all Products
     */
    getProducts(){
        return Axios.get(`${API_URL}/products`)
    }
    /**
     * API Call to get Information of one Product
     * @param {number} productId 
     * @returns {Promise} Promise for Return of one Product 
     */
    getProductInformation(productId){
        return Axios.get(`${API_URL}/products/${productId}`)
    }
    /**
     * API Call to get all Products from specific Store
     * @param {number} storeId 
     * @returns {Promise} Promise for Return of all Produducts from the Store
     */
    getStoreProducts(storeId){
        return Axios.get(`${API_URL}/products/${storeId}`)
    }
    /**
     * API Call for Create a new Product
     * @param {String} username Username of Store
     * @param {Object} data new Product Object
     * @returns {Promise} Promise for API Response
     */
    createProduct(username, data){
        console.log(username)
        return Axios.post(`${API_URL}/store/${username}/products`, data)
    }
    /**
     * API Call for Update an existing Product
     * @param {String} username Username of Store
     * @param {number} productId Product you want to update
     * @param {Object} data updated Product data
     * @returns {Promise} Promise for API Response
     */
    updateProductInformation(username, productId, data){
        return Axios.put(`${API_URL}/store/${username}/products/${productId}`, data)
    }
    /**
     * API Call for Deleating a Product
     * @param {String} username Username of Store
     * @param {*} productId Product you want to delete
     * @returns {Promise} Promise for API Response
     */
    deleteProduct(username, productId){
        return Axios.delete(`${API_URL}/store/${username}/products/${productId}`)
    }
    /**
     * API Call for Product Search
     * @param {String} query 
     * @returns {Promise} Promise for Return of Products realeated to the search
     */
    searchProduct(query){
        return Axios.get(`${API_URL}/products${query}`)
    }
}

export default new ProductService();