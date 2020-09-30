/**
 * This class is for the functionallity of the wishlist
 */
class WishListService {
    /**
     * Check if product is in the wishlist
     * @param {number} product_id 
     * @returns {boolean}
     */
    isProductInWishlist(product_id) {
        //is produkt in wishlist?
        if ('wishlist' in sessionStorage){
            if (sessionStorage.getItem('wishlist').match(product_id) !== null) {
                return true
            }  
        }
        return false
    }
    /**
     * Adds product to wishlist
     * @param {number} product_id 
     */
    addToWhishList(product_id){
            // Gibt es eine Wishlist?
        if (!('wishlist' in sessionStorage)) { //Nein
            sessionStorage.setItem('wishlist', ' ' + product_id)
        } else { //Ja
            var temp = sessionStorage.getItem('wishlist')
            if (temp.match(product_id) === null) {
                //Produkt ist noch nicht drinnen
                //TUN: hinzufügen  
                sessionStorage.setItem('wishlist', (temp + ' '+ product_id))
            }
        }
    }
    /**
     * Delete product from wishlist
     * @param {number} product_id 
     */
    deleteFromWishList(product_id){
        var temp = sessionStorage.getItem('wishlist')
        if (temp.match(product_id) !== null){
            sessionStorage.setItem('wishlist', (temp.replace(' ' + product_id, '')))
        }
    }
    /**
     * Delete wishlist
     */
    deleteWishList(){
            sessionStorage.removeItem('wishlist')
    }
    /**
     * Get an array of all productIds from the wishlist
     */
    getProductsfromWishlist () {
        var products
        if ('wishlist' in sessionStorage){
            products = sessionStorage.getItem('wishlist').split(' ');            
        } else {
            products = null
        }
        return products
    
    }
}

export default new WishListService();