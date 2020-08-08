package praktikum.AIFB.PRIS.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * This class handles the https requests of the logged in Users (retail stores)
 * @author merti
 *
 */
//enable requests from frontend, an other server
@CrossOrigin(origins="http://localhost4200")
@RestController
//first path part, easy way to define Prefix for ALL Request URIs in this class 
@RequestMapping("/{user_id}")
public class UserController {

	/**
	 * Start page for logged-in Users (retail store)
	 * @return 
	 */
	@GetMapping ("/dashboard")
	public String start() {
		return "welcome";
	}
	
	/**
	 * Delete a product
	 * @return
	 */
	@DeleteMapping ("/products/delete/{product_id}") // =/{user_id}/products/{product_id}
	public String deleteProduct() {
		return "index";
	}
	
	/**
	 * Update a product
	 * @return
	 */
	@PutMapping ("/products/update/{product_id}")
	public String updateProduct() {
		return "index";
	}

	/**
	 * Add a product
	 * @return
	 */
	@PutMapping ("/products/add/{product_id}")
	public String addProduct() {
		return "index";
	}

}
