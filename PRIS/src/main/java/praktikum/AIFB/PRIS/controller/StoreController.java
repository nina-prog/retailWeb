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
import praktikum.AIFB.PRIS.dto.StoreDto;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.mapper.StoreMapper;
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

  @Autowired
  private StoreMapper storeMapper;

  /**
   * View all informations of a retail store.
   *
   * @param retailStoreId id of retail store
   * @return storeinfo
   */
  @GetMapping("/storeInfo/{retailStore_id}")
  public StoreDto viewInfo(@PathVariable("retailStore_id") Long retailStoreId) {
    RetailStore store = retailStoreService.findStore(retailStoreId);
    return storeMapper.storeToStoreDto(store);
  }

  /**
   * Update store info.
   *
   * @param newStoreDto   updated store info
   * @param retailStoreId id of retail store which info is being updated
   * @return http response ok an also updated store info
   */
  @PutMapping("store/{username}/storeInfo/{retailStore_id}")
  public ResponseEntity<RetailStore> updateInfo(@RequestBody StoreDto newStoreDto,
      @PathVariable("retailStore_id") Long retailStoreId) {
    return new ResponseEntity<RetailStore>(
        retailStoreService.replaceInfo(newStoreDto, retailStoreId), HttpStatus.OK);
  }

}
