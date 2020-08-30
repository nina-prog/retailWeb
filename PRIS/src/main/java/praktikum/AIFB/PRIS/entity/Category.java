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
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

  @Column(name = "name")
  private String catName;

  // non-Owning side of the ManyToOne relationship
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "category")
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
  public Category(String catName) {
    super();
    this.catName = catName;
  }

  @JsonManagedReference
  public List<Product> getProducts() {
    return products;
  }

}
