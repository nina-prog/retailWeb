import Axios from "axios";

class ProductService {
    getProducts(){
        return Axios.get('https://localhost:8443/products')
    }
    getProductInformation(product_id){
        return Axios.get(`https://localhost:8443/products/${product_id}`)
    }
    getStoreProducts(store_id){
        return Axios.get(`https://localhost:8443/products/${store_id}`)
    }
    createProduct(data){
        return Axios.post('https://localhost:8443/product/create', data)
    }

    updateProductInformation(data, productId){
        let myData = {
            picture: 123,
            name: "Siebzig",
            price: 1.99,
            description: "Gurke",
            limitations: "0.99",
            remainingStock: 11
        }
        let myId = productId;
        console.log(`execute PUT: ${myId}`)
        console.log(myData)
        return Axios.put(`https://localhost:8433/product/update/${myId}`, myData)
    }
   
    deleteProduct(product_id){
        return Axios.delete(`https://localhost:8433/product/delete/${product_id}`)
    }


}

export default new ProductService();