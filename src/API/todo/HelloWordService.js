import Axios from "axios";


class HelloWorldService {
    executeHelloWorldService(){
        return Axios.get('https://localhost:8443/products')
        
    }
    getProducts(){
        return Axios.get('https://localhost:8443/products')
        
    }
    getFirstProduct(){
        
        return Axios.get('https://localhost:8443/products')
    }
    
    getProductInformation(product_id){
        /* let jsonData = {
            
            store_id: '2',
            title: 'Apfel',
            price: '3.90',
            stock: '4',
            description: "Hier steht die Beschreibung :-)",
            imgSrc: 'Hier müssen die Daten des Bildes sein'
        } */
        //return JSON.stringify(jsonData); // DELETE IF Server gives Information
        return Axios.get(`https://localhost:8443/product/${product_id}`)
        
    }
    createProduct(data){
        console.log("Post - create product: " + data)
        return Axios.post('https://localhost:8433/createProduct/}', data)
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