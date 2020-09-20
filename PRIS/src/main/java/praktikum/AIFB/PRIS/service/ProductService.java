package praktikum.AIFB.PRIS.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.exception.ProductNotFoundException;
import praktikum.AIFB.PRIS.exception.StoreNotFoundException;
import praktikum.AIFB.PRIS.repositories.ProductRepository;
import praktikum.AIFB.PRIS.repositories.ProductSpecs;
import praktikum.AIFB.PRIS.repositories.RetailStoreRepository;

/**
 * This class handles main business logic considering products in database.
 *
 * @author merti
 *
 */
@Service
public class ProductService {

  @Autowired
  private ProductRepository productrepo;

  @Autowired
  private RetailStoreRepository storerepo;

  // Aggregated root

  /**
   * Retrieve all products from database.
   *
   * @return list of all products
   */
  public List<Product> findAll() {
    return productrepo.findAll();
  }

  /**
   * Retrieve all products of a certain retail store from database.
   *
   * @param retailStoreId id of retail store
   * @return list of products of a certain retail store
   */
  public List<Product> findStoreProducts(Long retailStoreId) {
    return productrepo.findByRetailStore_storeId(retailStoreId);
  }

  // Single Item

  /**
   * Retrieve certain product from database.
   *
   * @param productId id of product
   * @return product
   */
  public Product findProduct(Long productId) {
    return productrepo.findById(productId)
        .orElseThrow(() -> new ProductNotFoundException(productId));
  }

  /**
   * Add new product to database.
   *
   * @param newProduct product which has to be stored
   * @param username   username of store adding new product
   * @return added product
   */
  public Product addProduct(Product newProduct, String username) {
    RetailStore store = storerepo.findByUser_username(username);
    newProduct.setRetailStore(store);
    return productrepo.save(newProduct);
  }

  /**
   * Update product in database.
   *
   * @param newProduct new product info
   * @param id         product id given in URL
   * @return updated product
   */
  public Product updateProduct(Product newProduct, Long id) {
    // make sure store already exists in database
    if (productrepo.existsById(id)) {
      // make sure to set correct id
      newProduct.setProductId(id);
      // save updated info in database
      return productrepo.save(newProduct);
    } else {
      throw new StoreNotFoundException(id);
    }
  }

  /**
   * Delete product in database.
   *
   * @param productId product id
   */
  public void deleteProduct(Long productId) {
    productrepo.deleteById(productId);
  }

  /**
   * Only retrieve products from database which match certain criteria.
   *
   * @param keyword    only show products of which their name is something like
   *                   keyword
   * @param category   category name - only show products of a specific category
   * @param postalCode only show products available at stores located at addresses
   *                   with given postal code
   * @return list of products which match given criteria
   */
  public List<Product> filterProducts(Optional<String> keyword, Optional<String> category,
      Optional<String> postalCode, Optional<Long> storeId) {
    // run dynamic query, which is build (by Specifications) in order to combine
    // different filters
    return productrepo
        .findAll(ProductSpecs.getProductsByFilter(keyword, category, postalCode, storeId));
  }

}
