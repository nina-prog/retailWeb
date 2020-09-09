package praktikum.AIFB.PRIS.entity;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

/**
 * This class represents the retail store table in the database.
 *
 * @author merti
 *
 */
@Data
@Entity
@Table(name = "retail_store")
public class RetailStore {

  // defines foreign key column user_id and indicates the owner of the OneToOne
  // relationship
  @JsonIgnore
  @OneToOne
  @JoinColumn(name = "user_id")
  // make sure when user is converted into json no endless loop starts because
  // retailStore and user reference each other
  private User user;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "store_id")
  private Long storeId;

  @Column(name = "name")
  private String storeName;

  // defines foreign key column address_id and indicates the owner of the OneToOne
  // relationship
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "address_id", unique = true)
  private Address address;

  @Column(name = "opening_hours")
  private String openingHours;

  // phone number of customer service
  @Column(name = "customer_service")
  private String customerService;

  @Column(name = "phone_number")
  private String phoneNumber;

  private String email;

  @Column(name = "important_notifications")
  private String importantNotifications;

  private String limitations;

  // non-Owning side of the ManyToOne relationship
  @JsonManagedReference(value = "product-store")
  @OneToMany(targetEntity = Product.class, cascade = CascadeType.ALL, mappedBy = "retailStore")
  private List<Product> products;

  /**
   * Constructor.
   */
  protected RetailStore() {

  }

  /**
   * Constructor.
   *
   * @param user        user account retail store uses to log in
   * @param name        name of the retail store
   * @param phoneNumber phone number to contact retail store
   * @param email       email to contact retail store
   */
  public RetailStore(User user, String name, String phoneNumber, String email) {
    super();
    this.user = user;
    this.storeName = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

}
