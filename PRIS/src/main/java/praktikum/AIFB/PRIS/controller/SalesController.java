package praktikum.AIFB.PRIS.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This class handles the https requests of the sales
 * @author merti
 *
 */
@Controller
@RequestMapping("shopID")
public class SalesController {

	@GetMapping ("index")
	public String index() {
		return "management/index";
	}
	
}
