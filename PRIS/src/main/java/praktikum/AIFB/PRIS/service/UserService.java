package praktikum.AIFB.PRIS.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.entity.Role;
import praktikum.AIFB.PRIS.entity.User;
import praktikum.AIFB.PRIS.exception.UserNotFoundException;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;
import praktikum.AIFB.PRIS.repositories.UserRepository;

@Service
public class UserService {

  @Autowired
  private UserRepository userrepo;

  @Autowired
  private RetailStoreRepository storerepo;

  // Aggregated root

  public List<User> findAllUser() {
    return userrepo.findAll();
  }

  // Single Item

  public User addUser(User user) {
    // salt and hash password before save
    String code = encode(user.getPassword());
    user.setPassword(code);
    // add new user
    userrepo.save(user);
    // check authorization
    if (user.getRole().equals(Role.USER) && user.getRetailStore() != null) {
      storerepo.save(user.getRetailStore());
    }

    return user;
  }

  public void deleteUser(String userId) {
    Long id = Long.parseLong(userId);
    if (userrepo.existsById(id)) {
      userrepo.deleteById(id);
    } else {
      throw new UserNotFoundException(id);
    }
  }

  public String encode(String password) {
    return password;
  }

}
