import Axios from "axios";


class HelloWorldService {
    executeHelloWorldService(){
        return Axios.get('http://localhost:8080/hello-world')
        //console.log('execuse')
    }
}

export default new HelloWorldService();