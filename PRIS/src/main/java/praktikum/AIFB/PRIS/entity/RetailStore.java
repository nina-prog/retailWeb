package praktikum.AIFB.PRIS.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

/**
 * This class represents the retail store table in the database
 * @author merti
 *
 */
@Entity
public class RetailStore {
	
	//defines foreign key column user_id and indicates the owner of the OneToOne relationship
	//unique = true ensures that retail store can have only one account (see practial course paper D.....)
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "store_id")
	private Long storeId;
	
	private String name;
	
	//defines foreign key column address_id and indicates the owner of the OneToOne relationship
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id", unique = true)
	private Address address;
	
	@Column(name = "opening_hours")
	private String openingHours;
	
	//phone number of customer service
	@Column(name = "customer_service")
	private String customerService;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	private String email;
	
	@Column(name = "important_notifications")
	private String importantNotifications;
	
	private String limitations;
	
	//non-Owning side of the ManyToOne relationship
	@OneToMany(targetEntity=Product.class,cascade = CascadeType.ALL , fetch = FetchType.LAZY, mappedBy = "retailStore")
	private List<Product> products;
	
	/**
	 * Constructor
	 */
	protected RetailStore() {
		
	}
	
	/**
	 * Constructor
	 * @param user
	 * @param name
	 * @param phoneNumber
	 * @param email
	 */
	public RetailStore(User user, String name, String phoneNumber, String email) {
		super();
		this.user = user;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Long getStoreId() {
		return storeId;
	}

	public void setStoreId(Long storeId) {
		this.storeId = storeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public String getOpening_hours() {
		return openingHours;
	}

	public void setOpeningHours(String openingHours) {
		this.openingHours = openingHours;
	}

	public String getCustomerService() {
		return customerService;
	}

	public void setCustomerService(String customerService) {
		this.customerService = customerService;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getImportantNotifications() {
		return importantNotifications;
	}

	public void setImportantNotifications(String importantNotifications) {
		this.importantNotifications = importantNotifications;
	}

	public String getLimitations() {
		return limitations;
	}

	public void setLimitations(String limitations) {
		this.limitations = limitations;
	}

	@Override
	public String toString() {
		return "RetailStore [user=" + user + ", storeId=" + storeId + ", name=" + name + ", address=" + address
				+ ", openingHours=" + openingHours + ", customerService=" + customerService + ", phoneNumber="
				+ phoneNumber + ", email=" + email + ", importantNotifications=" + importantNotifications
				+ ", limitations=" + limitations + "]";
	}

}
