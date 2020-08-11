import Axios from 'axios'

class RetailDataService {

    retrieveRetailShops (name, id) {
        return Axios.get(`http://localhost:8082/users/${name}/EditStoreInformationUpdate/${id}`);
    }

    updateStoreInformation (value) {
        console.log(JSON.stringify(value)); 
        return Axios.put(`http://localhost:8082/${value.store_id}/Edit`, JSON.stringify(value))
    }

}

export default new RetailDataService();


//was ich brauche: ich musss irgendwie diese value.store.id herausbekommen