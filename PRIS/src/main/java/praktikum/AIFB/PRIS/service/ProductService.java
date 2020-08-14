package praktikum.AIFB.PRIS.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.repositories.ProductRepository;

/**
 * @author merti
 *
 */
@Service
public class ProductService {

  @Autowired
  private ProductRepository repo;

  public List<Product> findAll() {
    return repo.findAll();
  }

  public List<Product> findStoreProducts(String retailStoreId) {
    return repo.findByRetailStore_storeId(Long.parseLong(retailStoreId));
  }

  public Optional<Product> findProduct(String productId) {
    return repo.findById(Long.parseLong(productId));
  }

  public Product addProduct(Product newProduct) {
    return repo.save(newProduct);
  }

  // public Product replaceProduct(Product newProduct, String productId) {
  // Product product = repo.findById(Long.parseLong(productId));
  // product.
  // product.setRole(newEmployee.getRole());
  // return repo.
  // }

}
