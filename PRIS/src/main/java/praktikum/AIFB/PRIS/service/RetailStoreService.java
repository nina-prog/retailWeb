package praktikum.AIFB.PRIS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;

@Service
public class RetailStoreService {

  @Autowired
  public RetailStoreRepository repository;

  public RetailStore findStore(String retailStoreId) {
    return repository.findByStoreId(Long.parseLong(retailStoreId));
  }

}
