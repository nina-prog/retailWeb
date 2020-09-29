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
import praktikum.AIFB.PRIS.dto.CategoryDto;
import praktikum.AIFB.PRIS.dto.ProductDto;
import praktikum.AIFB.PRIS.entity.Category;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.mapper.CategoryMapper;
import praktikum.AIFB.PRIS.mapper.ProductMapper;
import praktikum.AIFB.PRIS.service.CategoryService;
import praktikum.AIFB.PRIS.service.ProductService;
import praktikum.AIFB.PRIS.service.RetailStoreService;

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

  @Autowired
  private CategoryService categoryService;

  @Autowired
  private RetailStoreService storeService;

  @Autowired
  private ProductMapper productMapper;

  @Autowired
  private CategoryMapper categoryMapper;

  // Aggregate root.

  /**
   * View all products, or filtered products if parameters are given.
   *
   * @param keyword       text entered in searchbar
   * @param category      name of selected category
   * @param postalCode    selected postal code
   * @param retailStoreId id of selected store
   * @return list of products which match selected filters
   */
  @GetMapping("/products")
  public List<ProductDto> keywordSearchProducts(@RequestParam("keyword") Optional<String> keyword,
      @RequestParam("category") Optional<String> category,
      @RequestParam("postalCode") Optional<String> postalCode,
      @RequestParam("retailStore_id") Optional<Long> retailStoreId) {
    List<Product> products = productService.filterProducts(keyword, category, postalCode,
        retailStoreId);
    return productMapper.toProductDtos(products);
  }

  /**
   * View all categories.
   *
   * @return list of categories
   */
  @GetMapping("/categories")
  public List<CategoryDto> viewAllCat() {
    List<Category> categories = categoryService.findAllCategories();
    return categoryMapper.toCategoryDtos(categories);
  }

  // Single item

  /**
   * View just one product and it`s information.
   *
   * @param productId id of the product
   * @return product
   */
  @GetMapping("/products/{product_id}")
  public ProductDto viewOneProduct(@PathVariable("product_id") Long productId) {
    Product product = productService.findProduct(productId);
    return productMapper.productToProductDto(product);
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
    return ResponseEntity.noContent().build();
  }

  /**
   * Update a product.
   *
   * @param newProductDto updated product info
   * @param productId     id of product being updated
   * @return http response ok an also updated product
   */
  @PutMapping("store/{username}/products/{product_id}")
  public ResponseEntity<Product> updateProduct(@RequestBody ProductDto newProductDto,
      @PathVariable("product_id") Long productId) {
    return new ResponseEntity<Product>(productService.updateProduct(newProductDto, productId),
        HttpStatus.OK);
  }

  /**
   * Add a product.
   *
   * @param newProductDto new product which should be added to the database
   * @return http response created
   */
  @PostMapping("store/{username}/products")
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<Void> addProduct(@RequestBody ProductDto newProductDto,
      @PathVariable("username") String username) {
    // mapping
    Product newProduct = productMapper.productDtoToProduct(newProductDto,
        storeService.findByUsername(username));
    // actual build
    Product product = productService.addProduct(newProduct);
    // Location (self reference)
    // Get current ressource URL and change path
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().replacePath("/products/{product_id}")
        .buildAndExpand(product.getProductId()).toUri();

    return ResponseEntity.created(uri).build();
  }

}
