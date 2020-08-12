import Axios from "axios";


class HelloWorldService {
    executeHelloWorldService(){
        return Axios.get('https://localhost:8443/products')
        
    }
    getProductInformation(product_id){
        let jsonData = {
            product_id: '2',
            store_id: '2',
            title: 'Apfel',
            price: '3.90',
            stock: '4',
            description: "Hier steht die Beschreibung :-)",
            imgSrc: 'Hallo'
        }
        return JSON.stringify(jsonData); // DELETE IF Server gives Information
        return Axios.get(`https://localhost:8443/product/${product_id}`)
        
    }
    updateProductInformation(data, product_id){
        console.log('execute PUT')
        return Axios.put(`https://localhost:8433/updateProduct/${product_id}`, data)
    }
   
    updateStoreInformation(data, store_id) {
        console.log('execute PUT' + data)
        return Axios.put(`https://localhost:8433/updateProduct/${store_id}`, data)
    }

    retrieveStoreInformation(store_id) {
        return Axios.get(`https://localhost:8443/storeInformation/${store_id}`)

    }

}



export default new HelloWorldService();