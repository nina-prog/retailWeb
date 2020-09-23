import Axios from "axios";

class StoreService {
    
    getStoreInformation(store_id){
        return Axios.get(`https://localhost:8443/storeInfo/${store_id}`)
    }

    updateStoreInformation(username, storeId, data) {
        return Axios.put(`https://localhost:8443/store/username_2/storeInfo/1`, data)
        return Axios.put(`https://localhost:8433/store/${username}/storeInfo/${storeId}`, data)
    }
}

export default new StoreService();