package praktikum.AIFB.PRIS.repositories;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import praktikum.AIFB.PRIS.entity.Address;

/**
 * This class represents a Data Access Object (DAO) to manage addresses from the
 * database.
 * 
 * @author merti
 *
 */
@Repository
@Transactional
public interface AddressRepository extends JpaRepository<Address, Long> {

}