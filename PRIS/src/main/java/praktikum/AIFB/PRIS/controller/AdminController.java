package praktikum.AIFB.PRIS.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This class handles the https requests of the admin
 * @author merti
 *
 */
@Controller
@RequestMapping("admin")
public class AdminController {
	
	@GetMapping("index")
	public String index() { 
		return "admin/index";
	}
	
}
