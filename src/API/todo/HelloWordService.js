import Axios from "axios";


class HelloWorldService {
    executeHelloWorldService(){
<<<<<<< HEAD
        return Axios.get('https://localhost:8443/products')
=======
        return Axios.get('https://localhost:84433')
>>>>>>> 059b501da1043a80fbe251bb192a506768bd0435
        
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