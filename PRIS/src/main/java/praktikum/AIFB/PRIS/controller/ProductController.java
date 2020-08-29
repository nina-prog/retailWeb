package praktikum.AIFB.PRIS.controller;

import java.net.URI;
import java.util.List;
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
  public List<Product> viewSomeProducts(@PathVariable("retailStore_id") Long retailStoreId) {
    return productService.findStoreProducts(retailStoreId);
  }

  /**
   * Filter products by different parameters. URL looks something like this, where
   * it is optional which parameters are
   * given:"/products?keyword={keyword}&category_name={category_name}&postal_code={postal_code}"
   *
   * @param keyword    text entered in searchbar
   * @param cname      name of selected category
   * @param postalCode selected postal code
   * @return list of products which match selected filters
   */
  @GetMapping(value = "/products/filter", params = { "keyword", "category_name", "postal_code" })
  public List<Product> keywordSearchProducts(@RequestParam("keyword") String keyword,
      @RequestParam("category_name") String cname, @RequestParam("postal_code") String postalCode) {
    return productService.filterProducts(keyword, cname, postalCode);
  }

  // Single item

  /**
   * View just one product and it`s information.
   *
   * @param productId id of the product
   * @return product
   */
  @GetMapping("/product/{product_id}")
  public Product viewOneProduct(@PathVariable("product_id") Long productId) {
    return productService.findProduct(productId);
  }

  /**
   * Delete a product.
   *
   * @param productId id of the product
   * @return http response not found
   */
  @DeleteMapping("store/{username}/product/delete/{product_id}")
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
  @PutMapping("store/{username}/product/update/{product_id}")
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
  @PostMapping("store/{username}/product/create")
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<Void> addProduct(@RequestBody Product newProduct,
      @PathVariable("username") String username) {
    Product product = productService.addProduct(newProduct, username);
    // Location
    // Get current ressource URL and change path
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().replacePath("/product/{product_id}")
        .buildAndExpand(product.getProductId()).toUri();

    return ResponseEntity.created(uri).build();
  }

}
