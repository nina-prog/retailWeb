import Axios from "axios";
import {API_URL} from '../constants.js'

/**
 * This class is for interacting with the API for all User and Category API calls
 */

class UserService {
    /**
     * API Call to get all Categories
     * @returns {Promise} Promise for Return of all Categories 
     */
    getCategories(){
        return Axios.get(`${API_URL}/categories`)
    }
    /**
     * API Call to create a new Category
     * @param {String} name 
     * @returns {Promise} Promise for API Response 
     */
    createCategories(name){
        return Axios.post(`${API_URL}/adm/categories`, {catName: name})
    }
    /**
     * API Call to delete a Category
     * @param {String} CategoryId 
     * @returns {Promise} Promise for API Response 
     */
    deleteCategories(CategoryId){
        return Axios.delete(`${API_URL}/adm/categories/${CategoryId}`)
    }
    /**
     * API Call to get all Users
     * @returns {Promise} Promise for Return of all Users
     */
    getUser(){
        return Axios.get(`${API_URL}/adm/user`)
    }
    /**
     * API Call to create a new User
     * @param {String} newUser 
     * @returns {Promise} Promise for API Response 
     */
    createUser(newUser){
        return Axios.post(`${API_URL}/adm/user`, newUser)
    }
    /**
     * API Call to delete a User
     * @param {String} UserId 
     * @returns {Promise} Promise for API Response 
     */
    deleteUser(UserId){
        return Axios.delete(`${API_URL}/adm/user/${UserId}`)
    }    
}

export default new UserService();