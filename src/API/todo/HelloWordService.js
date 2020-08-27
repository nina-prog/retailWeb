import Axios from "axios";

class HelloWorldService {
    getProducts(){
        return Axios.get('https://localhost:8443/products')
    }
    getProductInformation(product_id){
        return Axios.get(`https://localhost:8443/product/${product_id}`)
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


    getStoreInformation(store_id){
        return Axios.get(`https://localhost:8443/storeInfo/${store_id}`)
    }

    updateStoreInformation(data, store_id) {
        console.log('execute PUT' + data)
        return Axios.put(`https://localhost:8433/storeInfo/update/${store_id}`, data)
    }
    retrieveStoreInformation(store_id) {
        let jsonData = {
            store_id: '1',
            name: 'ALDI',
            address: 'Kreuzstraße',
            openingHours: '10-12',
            restrictions: "Deine Mudda"
        }
        return JSON.stringify(jsonData); // DELETE IF Server gives Information  return Axios.get(`https://localhost:8443/storeInformation/${store_id}`)
    }
}

export default new HelloWorldService();