package praktikum.AIFB.PRIS.repositories;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import praktikum.AIFB.PRIS.entity.RetailStore;

/**
 * This class represents a Data Access Object (DAO) to manage retail stores from
 * the database.
 *
 * @author merti
 *
 */
@Repository
@Transactional
public interface RetailStoreRepository extends JpaRepository<RetailStore, Long> {

  /**
   * Find store of database by id.
   *
   * @param storeId id of store
   * @return store
   */
  RetailStore findByStoreId(Long storeId);

  /**
   * Find store of database by username of it`s user account.
   *
   * @param username username of user account store uses
   * @return store
   */
  @Query(value = "SELECT s FROM retail_store LEFTJOIN user USING (user_id) WHERE s.username = ?1",
      nativeQuery = true)
  RetailStore findbyUsername(String username);

  /**
   * Find store of database by id of it`s user account.
   *
   * @param userId id of store
   * @return store
   */
  RetailStore findByUser_userId(Long userId);

}
