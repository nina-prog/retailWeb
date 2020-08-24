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

      //Methode, um Elemente von WishListe zu erhalten 
      getProductsfromWishlist () {
        var products
        if ('wishlist' in sessionStorage){
            products = sessionStorage.getItem('wishlist').split(' ');
            console.log('passt')            
        } else {
            products = null
        }
        return products
     //Methode, die Elemente aus erstellten Array nimmt und den String Inhalt in eine get Methode vom Server macht 
    }

}

export default new WishListService();
