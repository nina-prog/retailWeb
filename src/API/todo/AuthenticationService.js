import Axios from "axios";

class AuthenticationService {
    registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null) return false
        return true
    }
    getLoggedInUsername(){
        sessionStorage.getItem('authenticatedUser');
    }
    executeJwtAuthenticationService(username, password){
        return Axios.post('https://localhost:8443/authenticate', {
            username,
            password
        })
    }
    registerSuccessfulLoginForJwt(username, token){
        sessionStorage.setItem('authenticatedUser', username)
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