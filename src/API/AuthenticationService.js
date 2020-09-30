import Axios from "axios"
import {API_URL} from '../constants.js'
/**
 * This class is for interacting with the API for authorization, user cookies and Axios Interceptor
 */
class AuthenticationService {
    /**
     * Logout User, Remove all User specific data in the Session Storage
     */
    logout(){
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('authenticatedUserRole');
        sessionStorage.removeItem('USER_TOKEN');
    }
    /**
     * Is a User logged in?
     * @returns {boolean} 
     */
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null) return false
        return true
    }
    
    /**
     * Get the Username from Session Storage
     * @returns {String} username
     */
    getLoggedInUsername(){
        return sessionStorage.getItem('authenticatedUser');
    }
    /**
     * API Call to authenticate
     * @param {String} username 
     * @param {String} password 
     * @returns {Promise} Promise for Jwt Token
     */
    executeJwtAuthenticationService(username, password){
        return Axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }
    /**
     * Save Username in Sessionstorage and add Axios Interceptor
     * @param {String} username 
     * @param {String} token 
     */
    registerSuccessfulLoginForJwt(username, token){
        sessionStorage.setItem('authenticatedUser', username)
        /* UserService.storeUserRole() */        
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    /**
     * Create and save authentication header in session storage
     * @param {String} token 
     * @returns {Sting} Authentication Header
     */
    createJWTToken(token) {
        sessionStorage.setItem("USER_TOKEN", "Bearer "+ token);
        return 'Bearer ' + token
    }
    /**
     * Create Axios Interceptor for adding authentication header to all API calls
     * @param {String} token 
     */
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