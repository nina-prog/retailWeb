package praktikum.AIFB.PRIS.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This class handles the https requests of the logged in Users (retail stores)
 * @author merti
 *
 */
								//noch abändern zu @RestController
@Controller
//first path part, easy way to define Prefix for ALL Request URIs in this class 
@RequestMapping("/{user_id}")
public class UserController {

	/**
	 * Start page for logged-in Users (retail store)
	 * @return 
	 */
	@GetMapping ("") // =/{user_id}
	public String start() {
		return "index";
	}
	
	/**
	 * Delete a product
	 * @return
	 */
	@DeleteMapping ("/products/{product_id}") // =/{user_id}/products/{product_id}
	public String deleteProduct() {
		return "index";
	}
	
	/**
	 * Update a product
	 * @return
	 */
	@PutMapping ("/products/{product_id}")
	public String updateProduct() {
		return "index";
	}

	/**
	 * Add a product
	 * @return
	 */
	@PutMapping ("/products/{product_id}")
	public String addProduct() {
		return "index";
	}

}
