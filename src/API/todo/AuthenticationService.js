import Axios from "axios";
import UserService from '../../API/todo/UserService.js'

class AuthenticationService {
    /* registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors()
    } */
    logout(){
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('authenticatedUserRole');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null) return false
        return true
    }
    isUserAdmin() {
        let role = sessionStorage.getItem('authenticatedUserRole');
        if(role===null) return false
        if(role=='ADMIN') return true
        return null
    }
    getLoggedInUsername(){
        return sessionStorage.getItem('authenticatedUser');
    }
    executeJwtAuthenticationService(username, password){
        return Axios.post('https://localhost:8443/authenticate', {
            username,
            password
        })
    }
    registerSuccessfulLoginForJwt(username, token){
        sessionStorage.setItem('authenticatedUser', username)
        /* UserService.storeUserRole() */        
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    createJWTToken(token) {
        return 'Bearer ' + token
    }
    setupAxiosInterceptors(token) {
        Axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();