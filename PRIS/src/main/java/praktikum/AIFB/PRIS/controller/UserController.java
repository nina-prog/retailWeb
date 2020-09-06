package praktikum.AIFB.PRIS.controller;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import praktikum.AIFB.PRIS.dto.Account;
import praktikum.AIFB.PRIS.entity.Category;
import praktikum.AIFB.PRIS.entity.User;
import praktikum.AIFB.PRIS.service.CategoryService;
import praktikum.AIFB.PRIS.service.JwtUserDetailsService;

/**
 * This class handles the https requests regarding user and category data only
 * admin has access to.
 *
 * @author merti
 *
 */
//enable requests from frontend (other server) via @CrossOrigin
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/adm")
public class UserController {

  @Autowired
  private JwtUserDetailsService userService;

  @Autowired
  private CategoryService categoryService;

  // Aggregated root

  /**
   * View all users.
   *
   * @return list of users
   */
  @GetMapping("/user")
  public List<User> viewAllUser() {
    return userService.findAllUser();
  }

  /**
   * View all categories.
   *
   * @return list of categories
   */
  @GetMapping("/categories")
  public List<Category> viewAllCat() {
    return categoryService.findAllCategories();
  }

  // Single Item

  /**
   * Add new user (with ROLE_ADMIN or ROLE_STORE). Note: JSON
   * Object:{"user":{"username":"",...}, "store":{"name":"", ...}}
   *
   * @param newAccount info of new user
   * @return http status created
   */
  @PostMapping("/user")
  public ResponseEntity<Void> addNewUser(@RequestBody Account newAccount) {
    Account account = userService.addUser(newAccount);
    // Location
    // Get current resource URL and change path
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
        .replacePath("/storeInfo/{retailStore_id}").buildAndExpand(account.getStore().getStoreId())
        .toUri();
    return ResponseEntity.created(uri).build();
  }

  /**
   * Delete user.
   *
   * @param userId id of user
   * @return http status not found
   */
  @DeleteMapping("/user/{user_id}")
  public ResponseEntity<Void> deleteUser(@PathVariable("user_id") Long userId) {
    userService.deleteUser(userId);
    return ResponseEntity.notFound().build();
  }

  /**
   * Delete category.
   *
   * @param categoryId id of category
   * @return http status not found
   */
  @DeleteMapping("/categories/{category_id}")
  public ResponseEntity<Void> deleteCat(@PathVariable("category_id") Integer categoryId) {
    categoryService.deleteCategory(categoryId);
    return ResponseEntity.notFound().build();
  }

  /**
   * Add new category.
   *
   * @param newCategory info of new category
   * @return http status created
   */
  @PostMapping("/categories")
  public ResponseEntity<Void> addNewCat(@RequestBody Category newCategory) {
    categoryService.addCategory(newCategory);
    return ResponseEntity.ok().build();
  }

}
