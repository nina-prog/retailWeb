package praktikum.AIFB.PRIS.entity;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Data;

/**
 * This class represents the category table in the database.
 *
 * @author merti
 *
 */
@Data
@Entity
public class Category {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "category_id")
  private Integer categoryId;

  private String name;

  // non-Owning side of the ManyToOne relationship
  @OneToMany(targetEntity = Product.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY,
      mappedBy = "category")
  private List<Product> products;

  /**
   * Constructor.
   */
  protected Category() {

  }

  /**
   * Constructor.
   *
   * @param name name of the category
   */
  public Category(String name) {
    super();
    this.name = name;
  }

}
