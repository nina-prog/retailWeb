package praktikum.AIFB.PRIS.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.dto.Account;
import praktikum.AIFB.PRIS.dto.JwtUserDetails;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.entity.Role;
import praktikum.AIFB.PRIS.entity.User;
import praktikum.AIFB.PRIS.exception.UserNotFoundException;
import praktikum.AIFB.PRIS.repositories.AddressRepository;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;
import praktikum.AIFB.PRIS.repositories.UserRepository;

/**
 * This class handles main business logic considering user in database.
 *
 * @author merti
 *
 */
@Service
public class JwtUserDetailsService implements UserDetailsService {

  @Autowired
  private UserRepository userrepo;

  @Autowired
  private RetailStoreRepository storerepo;

  @Autowired
  private AddressRepository addressrepo;

  @Autowired
  private PasswordEncoder bcryptEncoder;

  // Aggregated root

  public List<User> findAllUser() {
    return userrepo.findAll();
  }

  // Single Item

  /**
   * Add new user (ADMIN or STORE).
   *
   * @param account information about new user
   * @return new user
   */
  public User addUser(Account account) {
    if (account.getUser() == null) {
      throw new IllegalArgumentException("Given user must not be null!");
    }

    String username = account.getUser().getUsername();
    // encode password (hashing)
    String code = bcryptEncoder.encode(account.getUser().getPassword()).toString();
    Role role = account.getUser().getRole();
    // create new user
    User user = new User(username, code, role);

    // Adding new Admin
    if (user.getRole().equals(Role.ADMIN)) {
      userrepo.save(user);
    }

    // Adding new Store
    else if (user.getRole().equals(Role.STORE) && account.getStore() != null) {
      // save new user
      user.setRetailStore(account.getStore());
      userrepo.save(user);
      // save address
      if (account.getStore().getAddress() != null) {
        addressrepo.save(account.getStore().getAddress());
      }
      // save store
      account.getStore().setUser(user);
      storerepo.save(account.getStore());
    }

    return user;
  }

  /**
   * Delete user.
   *
   * @param userId id of user who is deleted
   */
  public void deleteUser(Long userId) {
    // check if user exists
    if (userrepo.existsById(userId)) {
      userrepo.deleteById(userId);
      // also delete corresponding retail store if it is no admin
      User user = userrepo.findById(userId).get();
      if (user.getRole().equals(Role.STORE)) {
        RetailStore trashStore = storerepo.findByUser_userId(userId);
        storerepo.delete(trashStore);
      }
    } else {
      throw new UserNotFoundException(userId);
    }
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userrepo.findByUsername(username);
    if (user == null) {
      throw new UsernameNotFoundException("User not found with username: " + username);
    }
    return new JwtUserDetails(user.getUserId(), user.getUsername(), user.getPassword(),
        user.getRole().toString());
  }

}
