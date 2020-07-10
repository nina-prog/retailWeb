package praktikum.AIFB.PRIS.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This class handles the https requests of the user
 * @author merti
 *
 */
@Controller
@RequestMapping("/")
public class HomeController {
	
	/**
	 * @return view
	 */
	@GetMapping("index")
	public String index() {
		return "index";
	}
	
	@GetMapping("login")
	public String login() {
		return "login";
	}
}
