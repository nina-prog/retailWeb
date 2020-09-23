import Axios from "axios";

class ProductService {
    /**
     * API Call for all Products
     * @returns {Promise} Promise for Return of all Products
     */
    getProducts(){
        return Axios.get('https://localhost:8443/products')
    }
    /**
     * API Call to get Information of one Product
     * @param {number} productId 
     * @returns {Promise} Promise for Return of one Product 
     */
    getProductInformation(productId){
        return Axios.get(`https://localhost:8443/products/${productId}`)
    }
    /**
     * API Call to get all Products from specific Store
     * @param {number} storeId 
     * @returns {Promise} Promise for Return of all Produducts from the Store
     */
    getStoreProducts(storeId){
        return Axios.get(`https://localhost:8443/products/${storeId}`)
    }
    /**
     * API Call for Create a new Product
     * @param {String} username Username of Store
     * @param {Object} data new Product Object
     * @returns {Promise} Promise for API Response
     */
    createProduct(username, data){
        console.log(username)
        return Axios.post(`https://localhost:8443/store/${username}/products`, data)
    }
    /**
     * API Call for Update an existing Product
     * @param {String} username Username of Store
     * @param {number} productId Product you want to update
     * @param {Object} data updated Product data
     * @returns {Promise} Promise for API Response
     */
    updateProductInformation(username, productId, data){
        return Axios.put(`https://localhost:8443/store/${username}/products/${productId}`, data)
    }
    /**
     * API Call for Deleating a Product
     * @param {String} username Username of Store
     * @param {*} productId Product you want to delete
     * @returns {Promise} Promise for API Response
     */
    deleteProduct(username, productId){
        return Axios.delete(`https://localhost:8443/store/${username}/products/${productId}`)
    }
    /**
     * API Call for Product Search
     * @param {String} query 
     * @returns {Promise} Promise for Return of Products realeated to the search
     */
    searchProduct(query){
        return Axios.get(`https://localhost:8443/products${query}`)
    }
}

export default new ProductService();