package praktikum.AIFB.PRIS.entity;

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
	//Long mapps to mySQL BigInteger
	private Long address_id;
	
	private String street_name;
	
	private String house_number;
	
	private String district;
	
	private String postal_code;
	
	private String country;
	
	//non-Owning (address) side of the OneToOne relationship
	@OneToOne(mappedBy = "address")
	private RetailStore retailStore;
	
	/**
	 * Constructor
	 */
	protected Address() {
		
	}
	
	/**
	 * Constructor
	 * @param street_name
	 * @param house_number
	 * @param district
	 * @param postal_code
	 * @param country
	 */
	public Address(String street_name, String house_number, String district, String postal_code,
			String country) {
		super();
		this.street_name = street_name;
		this.house_number = house_number;
		this.district = district;
		this.postal_code = postal_code;
		this.country = country;
	}
	
	/**
	 * Getter
	 * @return street_name of address
	 */
	public String getStreet_name() {
		return street_name;
	}
	
	/**
	 * Setter
	 * @param street_name of address
	 */
	public void setStreet_name(String street_name) {
		this.street_name = street_name;
	}
	
	/**
	 * Getter
	 * @return house number of address
	 */
	public String getHouse_number() {
		return house_number;
	}
	
	/**
	 * Setter
	 * @param house_number of address
	 */
	public void setHouse_number(String house_number) {
		this.house_number = house_number;
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
	public String getPostal_code() {
		return postal_code;
	}
	
	/**
	 * Setter
	 * @param postal_code of address
	 */
	public void setPostal_code(String postal_code) {
		this.postal_code = postal_code;
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
	public Long getAddress_id() {
		return address_id;
	}
	
	@Override
	public String toString() {
		return "address [address_id=" + address_id + ", street_name=" + street_name + ", house_number=" + house_number
				+ ", district=" + district + ", postal_code=" + postal_code + ", country=" + country + "]";
	}
	
}
