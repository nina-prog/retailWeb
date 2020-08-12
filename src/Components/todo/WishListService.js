class WishListService {
    addToWhishList(product_id){
        if (product_id !== sessionStorage.getItem('WishList')) {
            sessionStorage.setItem('WishList', product_id);

        }


        
        //if und soweiter
    }
    deleteFromWishList(product_id){
        sessionStorage.removeItem('authenticatedUser');
    }

   delteWishList(){
        sessionStorage.clear()
   }
}

export default new WishListService();