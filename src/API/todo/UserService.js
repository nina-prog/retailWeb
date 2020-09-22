import Axios from "axios";
import AuthenticationService from '../../API/todo/AuthenticationService.js'
class UserService {
    getCategories(){
        return Axios.get('https://localhost:8443/adm/categories')
    }
    createCategories(name){
        return Axios.post('https://localhost:8443/adm/categories', {catName: name})
    }
    deleteCategories(CategoryId){
        return Axios.delete(`https://localhost:8443/adm/categories/${CategoryId}`)
    }

    getUser(){
        return Axios.get('https://localhost:8443/adm/user')
    }
    createUser(newUser){
        return Axios.post('https://localhost:8443/adm/user', newUser)
    }
    deleteUser(UserId){
        return Axios.delete(`https://localhost:8443/adm/user/${UserId}`)
    }


    getUserRole(){
        return sessionStorage.getItem('authenticatedUserRole');
    }
    storeUserRole(){
        this.getUser()
            .then(res => this.handleUserRespones(res))
            .catch(() => alert('UserNotFound'))
    }
    handleUserRespones(response){
        let username = AuthenticationService.getLoggedInUsername()
        console.log('response: '+ JSON.stringify(response.data))
        sessionStorage.setItem('authenticatedUserRole', (response.data.find(el => el.username == username)).role)
    }    
}

export default new UserService();