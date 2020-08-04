package praktikum.AIFB.PRIS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.entity.Role;
import praktikum.AIFB.PRIS.entity.User;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;
import praktikum.AIFB.PRIS.repositories.UserRepository;

/**
 * This class handles the https requests of the admin
 * @author merti
 *
 */
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired // This means to get the bean called userRepository
	private UserRepository userRepository;
	
	@Autowired // This means to get the bean called retailRepository
	private RetailStoreRepository retailStoreRepository;
	
	@GetMapping("/index")
	public String index() { 
		return "admin/index";
	}
	
	@PostMapping("/add") // Map ONLY POST Requests
	public @ResponseBody String addNewUser (@RequestParam String username, @RequestParam String password, @RequestParam Role role, @RequestParam String name, @RequestParam String phone_number, @RequestParam String email ) {
	// @ResponseBody means the returned String is the response, not a view name
	// @RequestParam means it is a parameter from the GET or POST request
		//Account erstellen
		User u = new User(username, password, role);
		userRepository.save(u);
		//retail store abspeichern wenn kein admin aber unsicher wenn admin erstellt wird eher 2 getrennte methoden!
		if ( role == Role.USER ) {
		RetailStore s = new RetailStore(u, name, phone_number, email);
		retailStoreRepository.save(s);
		return "User saved";
		}
		else return "Admin saved";
	}
	
}
