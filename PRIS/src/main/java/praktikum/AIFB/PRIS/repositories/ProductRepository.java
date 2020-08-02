package praktikum.AIFB.PRIS.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import praktikum.AIFB.PRIS.entity.Product;

/**
 * This class represents a Data Access Object (DAO) to manage products from the database
 * @author merti
 *
 */
@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, Object>{

}
