package praktikum.AIFB.PRIS.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.service.ProductService;

/**
 * This class handles the https requests regarding the product data.
 *
 * @author merti
 *
 */
//enable requests from frontend (other server) via @CrossOrigin
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

  @Autowired
  private ProductService productService;

  // Aggregate root.

  /**
   * View all products, or filtered products if parameters are given.
   *
   * @param keyword       text entered in searchbar
   * @param categoryId    id of selected category
   * @param postalCode    selected postal code
   * @param retailStoreId id of selected store
   * @return list of products which match selected filters
   */
  @GetMapping("/products")
  public List<Product> keywordSearchProducts(@RequestParam("keyword") Optional<String> keyword,
      @RequestParam("category") Optional<Integer> categoryId,
      @RequestParam("postalCode") Optional<String> postalCode,
      @RequestParam("retailStore_id") Optional<Long> retailStoreId) {
    return productService.filterProducts(keyword, categoryId, postalCode, retailStoreId);
  }

  // Single item

  /**
   * View just one product and it`s information.
   *
   * @param productId id of the product
   * @return product
   */
  @GetMapping("/products/{product_id}")
  public Product viewOneProduct(@PathVariable("product_id") Long productId) {
    return productService.findProduct(productId);
  }

  /**
   * Delete a product.
   *
   * @param productId id of the product
   * @return http response not found
   */
  @DeleteMapping("store/{username}/products/{product_id}")
  public ResponseEntity<Void> deleteProduct(@PathVariable("product_id") Long productId) {
    productService.deleteProduct(productId);
    return ResponseEntity.notFound().build();
  }

  /**
   * Update a product.
   *
   * @param newProduct updated product info
   * @param productId  id of product being updated
   * @return http response ok an also updated product
   */
  @PutMapping("store/{username}/products/{product_id}")
  public ResponseEntity<Product> updateProduct(@RequestBody Product newProduct,
      @PathVariable("product_id") Long productId) {
    Product productUpdated = productService.updateProduct(newProduct, productId);
    return new ResponseEntity<Product>(productUpdated, HttpStatus.OK);
  }

  /**
   * Add a product.
   *
   * @param newProduct new product which should be added to the database
   * @return http response created
   */
  @PostMapping("store/{username}/products")
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<Void> addProduct(@RequestBody Product newProduct,
      @PathVariable("username") String username) {
    Product product = productService.addProduct(newProduct, username);
    // Location (self reference)
    // Get current ressource URL and change path
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().replacePath("/product/{product_id}")
        .buildAndExpand(product.getProductId()).toUri();

    return ResponseEntity.created(uri).build();
  }

}
