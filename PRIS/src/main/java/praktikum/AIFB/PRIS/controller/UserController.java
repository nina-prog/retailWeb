package praktikum.AIFB.PRIS.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import praktikum.AIFB.PRIS.entity.User;
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
@RequestMapping("/adm")
public class UserController {

  @Autowired
  private UserService userService;

  // Aggregated root

  @GetMapping("/user")
  public List<User> viewAllUser() {
    return userService.findAllUser();
  }

  // Single Item

  @PostMapping("/user/add")
  public User addNewUser(@RequestBody User user) {
    return userService.addUser(user);
  }

  @DeleteMapping("/user/delete/{user_id}")
  public void deleteUser(@PathVariable("user_id") String userId) {
    userService.deleteUser(userId);
  }

}
