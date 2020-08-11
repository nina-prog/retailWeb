import Axios from "axios";


class HelloWorldService {
    executeHelloWorldService(){
        return Axios.get('http://localhost:8082')
        //console.log('execuse')
    }
}

export default new HelloWorldService();