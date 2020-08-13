package praktikum.AIFB.PRIS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.entity.Role;
import praktikum.AIFB.PRIS.entity.User;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;
import praktikum.AIFB.PRIS.repositories.UserRepository;

@Service
public class UserService {

  @Autowired
  private UserRepository userrepo;

  @Autowired
  private RetailStoreRepository storerepo;

  /**
   * Add new user to database.
   *
   * @param username    username of the new user
   * @param password    password of the new user
   * @param name        name of the new user
   * @param phoneNumber phone number of the new user
   * @param email       email of the new user
   * @param role        defines to what the user account is authorized to do
   *                    (admin or regular user)
   */
  public void addUser(String username, String password, String name, String phoneNumber,
      String email, String role) {
    // add new user
    User u = new User(username, password);
    userrepo.save(u);
    // check authorization
    if (role.equalsIgnoreCase(Role.USER.name())) {
      u.setRole(Role.USER);
      RetailStore s = new RetailStore(u, name, phoneNumber, email);
      storerepo.save(s);
    } else if (role.equalsIgnoreCase(Role.ADMIN.name())) {
      u.setRole(Role.ADMIN);
    }
  }

}
