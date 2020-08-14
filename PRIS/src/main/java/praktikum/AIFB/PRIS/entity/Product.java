package praktikum.AIFB.PRIS.entity;

import java.math.BigDecimal;
import java.math.RoundingMode;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import lombok.Data;

/**
 * This class represents the product table in the database.
 *
 * @author merti
 *
 */
@Data
@Entity
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "product_id")
  private Long productId;

  // defines foreign key column category_id and indicates the owner of the
  // ManyToOne relationship
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "category_id")
  private Category category;

  @Lob
  @Basic(fetch = FetchType.LAZY)
  private byte[] picture;

  private String name;

  private BigDecimal price;

  // defines foreign key column store_id and indicates the owner of the ManyToOne
  // relationship
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "store_id")
  private RetailStore retailStore;

  private String description;

  private String limitations;

  @Column(name = "remaining_stock")
  private Integer remainingStock;

  /**
   * Constructor.
   */
  protected Product() {
  }

  /**
   * Constructor.
   *
   * @param category    category of the product
   * @param name        name of the product
   * @param price       price of the product
   * @param retailStore retail store selling this product
   */
  public Product(Category category, String name, BigDecimal price, RetailStore retailStore) {
    super();
    this.category = category;
    this.name = name;
    this.price = price;
    this.retailStore = retailStore;
  }

  /**
   * Converting bigDecimal scale (number of digits to the right of the decimal
   * point) of price to 2.
   */
  @PrePersist
  @PreUpdate
  public void pricePrecisionConvertion() {
    this.price.setScale(2, RoundingMode.HALF_UP);
  }

}
