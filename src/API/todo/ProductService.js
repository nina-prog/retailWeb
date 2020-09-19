import Axios from "axios";

class ProductService {
    getProducts(){
        return Axios.get('https://localhost:8443/products')
    }
    getProductInformation(productId){
        return Axios.get(`https://localhost:8443/products/${productId}`)
    }
    getStoreProducts(storeId){
        return Axios.get(`https://localhost:8443/products/${storeId}`)
    }
    createProduct(username, data){
        console.log(username)
        return Axios.post(`https://localhost:8443/store/${username}/products`, data)
    }
    updateProductInformation(username, productId, data){
        return Axios.put(`https://localhost:8443/store/${username}/products/${productId}`, data)
    }
    deleteProduct(username, productId){
        return Axios.delete(`https://localhost:8443/store/${username}/products/${productId}`)
    }

    searchProduct(query){
        return Axios.get(`https://localhost:8443/products${query}`)
    }
    /* searchProduct(queryName, queryValue){
        return Axios.get(`https://localhost:8443/products?${queryName}=${queryValue}`)
    } */
}

export default new ProductService();