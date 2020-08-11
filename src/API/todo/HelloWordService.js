import Axios from "axios";


class HelloWorldService {
    executeHelloWorldService(){
        return Axios.get('http://localhost:8082')
        
    }
    updateProductInformation(data, product_id){
        console.log('execute PUT')
        return Axios.put(`http://localhost:8082/updateProduct/${product_id}`, data)
    }
}

export default new HelloWorldService();