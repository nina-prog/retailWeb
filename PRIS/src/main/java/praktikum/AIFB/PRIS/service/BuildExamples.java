package praktikum.AIFB.PRIS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import lombok.extern.slf4j.Slf4j;
import praktikum.AIFB.PRIS.repositories.CategoryRepository;
import praktikum.AIFB.PRIS.repositories.ProductRepository;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;
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
public class BuildExamples implements CommandLineRunner {

  @Autowired
  private UserRepository userRepo;

  @Autowired
  private RetailStoreRepository storerepo;

  @Autowired
  private CategoryRepository categoryRepo;

  @Autowired
  private ProductRepository productRepo;

  @Autowired
  private PasswordEncoder bcryptEncoder;

  /**
   * Insert examples.
   */
  @Override
  public void run(String... args) throws Exception {
    //    // add user
    //    User user1 = new User("username_1", bcryptEncoder.encode("1"), Role.ADMIN);
    //    userRepo.save(user1);
    //    log.info("New User is created: " + user1);
    //
    //    User user2 = new User("username_2", bcryptEncoder.encode("2"), Role.STORE);
    //    userRepo.save(user2);
    //    log.info("New User is created: " + user2);
    //    RetailStore store1 = new RetailStore(user2, "store", "1234", "store@example.prg");
    //    storerepo.save(store1);
    //    log.info("New store is created: " + store1);
    //
    //    // add categories
    //    Category cat1 = new Category("vegetables");
    //    categoryRepo.save(cat1);
    //    log.info("New category is created: " + cat1);
    //    Category cat2 = new Category("sweets");
    //    categoryRepo.save(cat2);
    //    log.info("New category is created: " + cat2);
    //
    //    // add products
    //    Product p1 = new Product(cat1, "cucumber", new BigDecimal(0.99), store1);
    //    productRepo.save(p1);
    //    log.info("New product is created: " + p1);
    //    Product p2 = new Product(cat2, "chocolate", new BigDecimal(1.99), store1);
    //    productRepo.save(p2);
    //    log.info("New product is created: " + p2);
}

}
