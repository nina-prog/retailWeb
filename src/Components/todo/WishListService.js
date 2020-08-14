class WishListService {

    isProductInWishlist(product_id) {
        //Ist Produkt in WishListe?
        if ('wishlist' in sessionStorage){
            if (sessionStorage.getItem('wishlist').match(product_id) !== null) {
                return true
            }  
        }
        return false
    }


    addToWhishList(product_id){
            // Gibt es eine Wishlist?
        if (!('wishlist' in sessionStorage)) { //Nein
            sessionStorage.setItem('wishlist', product_id)
        } else { //Ja
            var temp = sessionStorage.getItem('wishlist')
            if (temp.match(product_id) === null) {
                //Produkt ist noch nicht drinnen
                //TUN: hinzufügen  
                sessionStorage.setItem('wishlist', (temp + ' '+ product_id))
            }
        }
    }

    deleteFromWishList(product_id){
        var temp = sessionStorage.getItem('wishlist')
        if (temp.match(product_id) !== null){
            sessionStorage.setItem('wishlist', (temp.replace(product_id, '')))
        }
    }

   deleteWishList(){
        sessionStorage.removeItem('wishlist')
   }
}

export default new WishListService();
