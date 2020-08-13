package praktikum.AIFB.PRIS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import praktikum.AIFB.PRIS.service.UserService;

/**
 * This class handles the https requests regarding the user data.
 *
 * @author merti
 *
 */
//enable requests from frontend, an other server
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

  @Autowired // This means to get the bean called userRepository
  private UserService userService;

  // not finished yet!
  /**
   * Add new user to database.
   *
   * @param username    username of the new added user account
   * @param password    of the new added user account
   * @param name        name of the retail store if user added is
   * @param phoneNumber phone number to contact retail store
   * @param email       email to contact retail store
   */
  @PostMapping("/addUser") // Map ONLY POST Requests
  public void addNewUser(@RequestParam String username, @RequestParam String password,
      @RequestParam String name, @RequestParam String phoneNumber, @RequestParam String email,
      @RequestParam String role) {
    userService.addUser(username, password, name, phoneNumber, email, role);
  }

}
