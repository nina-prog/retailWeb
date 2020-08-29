package praktikum.AIFB.PRIS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.service.RetailStoreService;

/**
 * This class handles the https requests regarding the retail store data.
 *
 * @author merti
 *
 */
//enable requests from frontend (other server) via @CrossOrigin
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StoreController {

  @Autowired
  private RetailStoreService retailStoreService;

  /**
   * View all informations of a retail store.
   *
   * @param retailStoreId id of retail store
   * @return storeinfo
   */
  @GetMapping("/storeInfo/{retailStore_id}")
  public RetailStore viewInfo(@PathVariable("retailStore_id") String retailStoreId) {
    return retailStoreService.findStore(retailStoreId);
  }

  /**
   * Update store info.
   *
   * @param newStore      updated store info
   * @param retailStoreId id of retail store which info is being updated
   * @return http response ok an also updated store info
   */
  @PutMapping("store/{username}/storeInfo/update/{retailStore_id}")
  public ResponseEntity<RetailStore> updateInfo(@RequestBody RetailStore newStore,
      @PathVariable("retailStore_id") Long retailStoreId) {
    RetailStore storeUpdated = retailStoreService.replaceInfo(newStore, retailStoreId);
    return new ResponseEntity<RetailStore>(storeUpdated, HttpStatus.OK);
  }

}
