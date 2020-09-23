import Axios from "axios";

class UserService {
    getCategories(){
        return Axios.get('https://localhost:8443/adm/categories')
    }
    createCategories(name){
        return Axios.post('https://localhost:8443//adm/categories', {catName: name})
    }
    deleteCategories(CategoryId){
        return Axios.delete(`https://localhost:8443/adm/categories/${CategoryId}`)
    }


    getUser(){
        return Axios.get('https://localhost:8443/adm/user')
    }
    createUserStore(username, password, store){
        return Axios.post('https://localhost:8443//adm/user', {
            user: {
                username: username,
                password: password,
                role: "STORE"
            },
            store: store
        })
    }
    createUserAdmin(username, password){
        return Axios.post('https://localhost:8443//adm/user', {
            user: {
                username: username,
                password: password,
                role: "ADMIN"
            }
        })
    }
    deleteUser(UserId){
        return Axios.delete(`https://localhost:8443/adm/user/${UserId}`)
    }
}

export default new UserService();