package praktikum.AIFB.PRIS.repositories;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import praktikum.AIFB.PRIS.entity.Address;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.entity.RetailStore;

/**
 * This class defines JPA-Specifications which help filtering/searching products
 * trough more complex queries. It Predicates
 *
 * @author merti
 *
 */
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
  public static Specification<Product> getProductsByFilter(String keyword, Integer categoryId,
      String postalCode) {
    return (root, cq, cb) -> {
      List<Predicate> predicates = new ArrayList<>();
      // Note: Using hibernate Metamodel, like Product_.retailStore instead of
      // "retaiLstore" does not work, eclipse doesn`t recognize it join tables
      // product, retailStore, address and category for correct filtering
      Join<Product, RetailStore> storeJoin = root.join("retailStore", JoinType.INNER);
      Join<RetailStore, Address> addressJoin = storeJoin.join("address", JoinType.INNER);

      // create comparsion elements using CriteriaBuilder
      if (keyword != null) {
        Predicate keywordSearch = cb.like(cb.lower(root.get("name")),
            "%" + keyword.toLowerCase() + "%");
        predicates.add(keywordSearch);
      }
      if (categoryId != null) {
        Predicate categorySearch = cb.equal(root.get("category").get("categoryId"), categoryId);
        predicates.add(categorySearch);
      }
      if (postalCode != null) {
        Predicate postalCodeSearch = cb.equal(addressJoin.get("postalCode"), postalCode);
        predicates.add(postalCodeSearch);
      }
      // add selected predicates to where clause and build query
      return cb.and(predicates.toArray(new Predicate[0]));
    };
  }

}
