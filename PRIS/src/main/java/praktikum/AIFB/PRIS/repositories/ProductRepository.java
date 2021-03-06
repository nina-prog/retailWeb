package praktikum.AIFB.PRIS.repositories;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import praktikum.AIFB.PRIS.entity.Product;

/**
 * This class represents a Data Access Object (DAO) to manage products from the
 * database.
 *
 * @author merti
 *
 */
@Repository
@Transactional
public interface ProductRepository
    extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

  /**
   * Return all products of a specific store (same store_id).
   *
   * @param storeId Id of retail store
   * @return List of products of a specific store
   */
  List<Product> findByRetailStore_storeId(Long storeId);

}
