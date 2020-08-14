package praktikum.AIFB.PRIS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import lombok.extern.slf4j.Slf4j;
import praktikum.AIFB.PRIS.entity.Role;
import praktikum.AIFB.PRIS.entity.User;
import praktikum.AIFB.PRIS.repositories.UserRepository;

/**
 * This class sets some User examples at project start in order to explore the
 * web application. This is not necessary for the web application itself but
 * demonstrates it`s functions.
 *
 * @author merti
 *
 */
@Slf4j
@Component
public class UserRepositoryCommandLineRunner implements CommandLineRunner {

  @Autowired
  private UserRepository userRepo;

  /**
   * Insert Users examples.
   */
  @Override
  public void run(String... args) throws Exception {
    User user = new User("maxdwu", "mustermann", Role.ADMIN);
    userRepo.save(user);
    log.info("New User is created: " + user);
  }

}
