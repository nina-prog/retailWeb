package praktikum.AIFB.PRIS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.repositories.ProductRepository;
import praktikum.AIFB.PRIS.repositories.UserRepository;

/**
 * This class handles the https requests of visitors who are not logged in
 * @author merti
 *
 */
// Order: category, user, address, retail store, product // Left: OneProduct, LogIn, Filters(Category, Price, Address)
@RestController
public class MainController {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	/**
	 * Start page for not logged-in Users
	 * @return html page
	 */
	@GetMapping ("/welcome")
	public String start() {
		return "index";
	}
	
	/**
	 * View all products 
	 * @return list of products
	 */
	@GetMapping ("/products")
	public List<Product> viewAllProducts() {
		return productRepository.findAll();
		
	}
	
	/**
	 * View all products of a retail store
	 * @return list of products
	 */
	@GetMapping ("/products/{retailStore_id}")
	public List<Product> viewSomeProducts(@PathVariable String retailStore_id) {
		return productRepository.findByStore_id(Long.parseLong(retailStore_id));
	}
	
	/**
	 * View all informations of a retail store
	 * @return html page
	 */
	@GetMapping ("/{retailStore_id}/info")
	public String viewInfo() {
		return "retail store info";
	}
	
}
