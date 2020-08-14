package praktikum.AIFB.PRIS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.exception.StoreNotFoundException;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;

@Service
public class RetailStoreService {

  @Autowired
  public RetailStoreRepository repo;

  public RetailStore findStore(String retailStoreId) {
    Long id = Long.parseLong(retailStoreId);
    return repo.findById(id).orElseThrow(() -> new StoreNotFoundException(id));
  }

  public RetailStore replaceInfo(RetailStore newStore, String retailStoreId) {
    Long id = Long.parseLong(retailStoreId);
    RetailStore store = repo.findById(id).orElseThrow(() -> new StoreNotFoundException(id));
    // update store information
    store.setCustomerService(newStore.getCustomerService());
    store.setEmail(newStore.getEmail());
    store.setImportantNotifications(newStore.getImportantNotifications());
    store.setLimitations(newStore.getLimitations());
    store.setName(newStore.getName());
    store.setOpeningHours(newStore.getOpeningHours());
    store.setPhoneNumber(newStore.getPhoneNumber());
    // save updated product in database
    return repo.save(store);
  }

}
