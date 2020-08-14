package praktikum.AIFB.PRIS.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.exception.ProductNotFoundException;
import praktikum.AIFB.PRIS.repositories.ProductRepository;

/**
 * @author merti
 *
 */
@Service
public class ProductService {

  @Autowired
  private ProductRepository repo;

  // Aggregated root

  public List<Product> findAll() {
    return repo.findAll();
  }

  public List<Product> findStoreProducts(String retailStoreId) {
    return repo.findByRetailStore_storeId(Long.parseLong(retailStoreId));
  }

  // Single Item

  public Product findProduct(String productId) {
    Long id = Long.parseLong(productId);
    return repo.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
  }

  public Product addProduct(Product newProduct) {
    return repo.save(newProduct);
  }

  public Product replaceProduct(Product updatedProduct, String productId) {
    Long id = Long.parseLong(productId);
    // find product
    Product product = repo.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
    // update product information
    product.setCategory(updatedProduct.getCategory());
    product.setDescription(updatedProduct.getDescription());
    product.setLimitations(updatedProduct.getLimitations());
    product.setName(updatedProduct.getName());
    product.setPicture(updatedProduct.getPicture());
    product.setPrice(updatedProduct.getPrice());
    product.setRemainingStock(updatedProduct.getRemainingStock());
    // save updated product in database
    return repo.save(product);
  }

  public void deleteProduct(String productId) {
    repo.deleteById(Long.parseLong(productId));
  }

}
