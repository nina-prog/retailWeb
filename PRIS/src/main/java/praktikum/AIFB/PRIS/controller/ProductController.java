package praktikum.AIFB.PRIS.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.service.ProductService;

/**
 * This class handles the https requests regarding the product data.
 *
 * @author merti
 *
 */
//enable requests from frontend, an other server
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

  @Autowired
  private ProductService productService;

  // Aggregate root.

  /**
   * View all products.
   *
   * @return list of products
   */
  @GetMapping("/products")
  public List<Product> viewAllProducts() {
    return productService.findAll();
  }

  /**
   * View all products of a retail store.
   *
   * @return list of products
   */
  @GetMapping("/products/{retailStore_id}")
  public List<Product> viewSomeProducts(@PathVariable("retailStore_id") String retailStoreId) {
    return productService.findStoreProducts(retailStoreId);
  }

  // Single item

  /**
   * View just one product and it`s information.
   *
   * @return certain product with it`s information
   */
  @GetMapping("/product/{product_id}")
  public Optional<Product> viewOneProduct(@PathVariable("product_id") String productId) {
    return productService.findProduct(productId);
  }

  /**
   * Delete a product.
   *
   */
  @DeleteMapping("product/delete/{product_id}")
  public void deleteProduct() {
  }

  /**
   * Update a product.
   *
   */
  // @PutMapping("product/update/{product_id}")
  // public Product updateProduct(@RequestBody Product newProduct,
  // @PathVariable("product_id") String productId) {
  // return productService.replaceProduct(newProduct, productId);
  // }

  /**
   * Add a product.
   *
   * @param newProduct new product which should be added to the database
   * @return
   */
  @PostMapping("product/create")
  @ResponseStatus(HttpStatus.CREATED)
  public Product addProduct(@RequestBody Product newProduct) {
    return productService.addProduct(newProduct);
  }

}
