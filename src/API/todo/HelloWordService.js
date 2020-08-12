import Axios from "axios";


class HelloWorldService {
    executeHelloWorldService(){
        return Axios.get('https://localhost:84433')
        
    }
    updateProductInformation(data, product_id){
        console.log('execute PUT')
        return Axios.put(`https://localhost:8433/updateProduct/${product_id}`, data)
    }
   
    updateStoreInformation(data, store_id) {
        console.log('execute PUT' + data)
        return Axios.put(`https://localhost:8433/updateProduct/${store_id}`, data)
    }

}

export default new HelloWorldService();