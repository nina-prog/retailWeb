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

  RetailStore findByStoreId(Long storeId);
}
