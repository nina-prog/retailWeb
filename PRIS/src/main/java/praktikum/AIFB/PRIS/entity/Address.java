package praktikum.AIFB.PRIS.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import lombok.Data;

/**
 * This class represents the address table for the database.
 *
 * @author merti
 *
 */
@Data
@Entity
public class Address {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "address_id")
  private Long addressId;

  @Column(name = "street_name")
  private String streetName;

  @Column(name = "house_number")
  private String houseNumber;

  private String district;

  @Column(name = "postal_code")
  private String postalCode;

  private String country;

  // non-Owning side of the OneToOne relationship
  @OneToOne(mappedBy = "address")
  private RetailStore retailStore;

  /**
   * Constructor.
   */
  protected Address() {

  }

  /**
   * Constructor.
   *
   * @param streetName  street name of the address
   * @param houseNumber house number of the address
   * @param district    district of the address
   * @param postalCode  postal cod of the address
   * @param country     country of the address
   */
  public Address(String streetName, String houseNumber, String district, String postalCode,
      String country) {
    super();
    this.streetName = streetName;
    this.houseNumber = houseNumber;
    this.district = district;
    this.postalCode = postalCode;
    this.country = country;
  }

}
