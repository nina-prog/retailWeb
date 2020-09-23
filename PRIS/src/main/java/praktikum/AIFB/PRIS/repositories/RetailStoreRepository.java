package praktikum.AIFB.PRIS.repositories;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
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
   * Find store of database by id of it`s user account.
   *
   * @param userId id of account store uses
   * @return store
   */
  RetailStore findByUser_userId(Long userId);

  /**
   * Find store of database by username of it`s user account.
   * 
   * @param username username of account store uses
   * @return store
   */
  RetailStore findByUser_username(String username);

}
