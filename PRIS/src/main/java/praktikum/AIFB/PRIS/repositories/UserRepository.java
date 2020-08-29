package praktikum.AIFB.PRIS.repositories;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import praktikum.AIFB.PRIS.entity.User;

/**
 * This class represents a Data Access Object (DAO) to manage users from the
 * database.
 *
 * @author merti
 *
 */
@Repository
@Transactional
//necessary to be in an transaction to change something in database,
//instead of doing this for every method itself it is declared by
//the annotation @Transactional
public interface UserRepository extends JpaRepository<User, Long> {

  /**
   * Find user of database by it`s username.
   * 
   * @param username username of user
   * @return user
   */
  User findByUsername(String username);

}
