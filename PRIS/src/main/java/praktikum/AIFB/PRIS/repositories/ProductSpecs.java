package praktikum.AIFB.PRIS.repositories;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import javax.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import lombok.extern.slf4j.Slf4j;
import praktikum.AIFB.PRIS.entity.Product;

/**
 * This class defines JPA-Specifications which help filtering/searching products
 * trough more complex queries. The predicates display query parameters given in URL.
 *
 * @author merti
 *
 */
@Slf4j
public class ProductSpecs {

  /**
   * Build dynamic query filtering the products by given criteria.
   *
   * @param keyword    only show products of which their name is something like
   *                   keyword
   * @param categoryId only show products of a specific category
   * @param postalCode only show products available at stores located at addresses
   *                   with given postal code
   * @return List of products matching given criteria
   */
  public static Specification<Product> getProductsByFilter(Optional<String> keyword,
      Optional<String> category, Optional<String> postalCode, Optional<Long> storeId) {
    return (product, cq, cb) -> {
      List<Predicate> predicates = new ArrayList<>();
      // Note: Using hibernate Metamodel, like Product_.retailStore instead of
      // "retaiLstore" does not work, eclipse doesn`t recognize it

      // create comparsion elements using CriteriaBuilder
      if (keyword.isPresent()) {
        Predicate keywordSearch = cb.like(cb.lower(product.get("name")),
            "%" + keyword.orElse(null).toLowerCase() + "%");
        predicates.add(keywordSearch);
        log.debug("keywordSearch: " + keyword.toString());
      }
      if (category.isPresent()) {
        Predicate categorySearch = cb.equal(product.get("category").get("catName"),
            category.orElse(null));
        predicates.add(categorySearch);
        log.debug("categorySearch: " + category);
      }
      if (postalCode.isPresent()) {
        Predicate postalCodeSearch = cb.equal(
            product.get("retailStore").get("address").get("postalCode"), postalCode.orElse(null));
        predicates.add(postalCodeSearch);
        log.debug("postalCodeSearch: " + postalCode.toString());
      }
      if (storeId.isPresent()) {
        Predicate storeSearch = cb.equal(product.get("retailStore").get("storeId"),
            storeId.orElse(null));
        predicates.add(storeSearch);
        log.debug("storeSearch: " + storeId.toString());
      }
      // add selected predicates to where clause and build query
      log.info("Predicates of SQL Query: " + Arrays.deepToString(predicates.toArray()));
      return cq.where(predicates.toArray(new Predicate[0])).getRestriction();
    };
  }

}
