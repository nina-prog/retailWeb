package praktikum.AIFB.PRIS.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * This class handles the https requests of visitors who are not logged in
 * @author merti
 *
 */
@Controller
public class MainController {

	/**
	 * Start page for not logged-in Users
	 * @return html page
	 */
	@GetMapping ("/")
	public String start() {
		return "index";
	}
	
	/**
	 * View all products 
	 * @return html page
	 */
	@GetMapping ("/products")
	public String viewAllProducts() {
		return "index";
	}
	
	/**
	 * View all products of a retail store
	 * @return html page
	 */
	@GetMapping ("/products/{retailStore_id}/products")
	public String viewSomeProducts() {
		return "index";
	}
	
	/**
	 * View all informations of a retail store
	 * @return html page
	 */
	@GetMapping ("/products/{retailStore_id}/info")
	public String viewInfo() {
		return "index";
	}
	
}
