package praktikum.AIFB.PRIS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.exception.StoreNotFoundException;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;

/**
 * This class handles main business logic considering retail stores in database.
 *
 * @author merti
 *
 */
@Service
public class RetailStoreService {

  @Autowired
  public RetailStoreRepository repo;

  /**
   * Find retail store of database by it`s id.
   *
   * @param id id of retail store
   * @return retail store
   */
  public RetailStore findStore(Long id) {
    return repo.findById(id).orElseThrow(() -> new StoreNotFoundException(id));
  }

  /**
   * Update info of retail store.
   *
   * @param newStore updated retail store(info)
   * @param id       id of retail store whose info should be updated (given as
   *                 variable in URL path)
   * @return updated retail store(info)
   */
  public RetailStore replaceInfo(RetailStore newStore, Long id) {
    // make sure store already exists in database
    if (repo.existsById(id)) {
      // make sure to set correct id
      newStore.setStoreId(id);
      // save updated info in database
      return repo.save(newStore);
    } else {
      throw new StoreNotFoundException(id);
    }
  }

  public RetailStore findByUsername(String username) {
    return repo.findByUser_username(username);
  }

}
