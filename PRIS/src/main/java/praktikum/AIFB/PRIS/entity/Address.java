package praktikum.AIFB.PRIS.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * This class represents the address table for the database
 * @author merti
 *
 */
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
	
	//non-Owning side of the OneToOne relationship
	@OneToOne(mappedBy = "address")
	private RetailStore retailStore;
	
	/**
	 * Constructor
	 */
	protected Address() {
		
	}
	
	/**
	 * Constructor
	 * @param streetName
	 * @param houseNumber
	 * @param district
	 * @param postalCode
	 * @param country
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
	
	/**
	 * Getter
	 * @return street name of address
	 */
	public String getStreetName() {
		return streetName;
	}
	
	/**
	 * Setter
	 * @param streetName of address
	 */
	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}
	
	/**
	 * Getter
	 * @return houseNumber of address
	 */
	public String getHouseNumber() {
		return houseNumber;
	}
	
	/**
	 * Setter
	 * @param houseNumber of address
	 */
	public void setHouseNumber(String houseNumber) {
		this.houseNumber = houseNumber;
	}
	
	/**
	 * Getter
	 * @return district of address
	 */
	public String getDistrict() {
		return district;
	}
	
	/**
	 * Setter
	 * @param district of address
	 */
	public void setDistrict(String district) {
		this.district = district;
	}
	
	/**
	 * Getter
	 * @return postal code of address
	 */
	public String getPostalCode() {
		return postalCode;
	}
	
	/**
	 * Setter
	 * @param postal_code of address
	 */
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	
	/**
	 * Getter
	 * @return country of address
	 */
	public String getCountry() {
		return country;
	}
	
	/**
	 * Setter
	 * @param country of address
	 */
	public void setCountry(String country) {
		this.country = country;
	}
	
	/**
	 * Getter
	 * @return id of address
	 */
	public Long getAddressId() {
		return addressId;
	}
	
	@Override
	public String toString() {
		return "address [addressId=" + addressId + ", streetName=" + streetName + ", houseNumber=" + houseNumber
				+ ", district=" + district + ", postalCode=" + postalCode + ", country=" + country + "]";
	}
	
}
