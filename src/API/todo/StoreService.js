import Axios from "axios";
import AuthentificationService from '../../API/todo/AuthenticationService.js'

class StoreService {
    
    getStoreInformation(store_id){
        return Axios.get(`https://localhost:8443/storeInfo/${store_id}`)
    }

    updateStoreInformation(data, store_id) {
        console.log('execute PUT' + data)
        let storeusername = ''
        if (AuthentificationService.getLoggedInUsername() == null) {
            return alert ("You are not logged in!")
        } else {
            storeusername += AuthentificationService.getLoggedInUsername();
            return Axios.put(`https://localhost:8433/store/${storeusername}/storeInfo/update/${store_id}`, data)
        }
        
        
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

export default new StoreService();