package praktikum.AIFB.PRIS.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
	@JoinColumn(name = "user_id", unique = true)
	private User user;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long store_id;
	
	private String name;
	
	//defines foreign key column address_id and indicates the owner of the OneToOne relationship
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id", unique = true)
	private Address address;
	
	private String opening_hours;
	
	//phone number of customer service
	private String customer_service;
	
	private String phone_number;
	
	private String email;
	
	private String important_notifications;
	
	private String limitations;
	
	//non-Owning (address) side of the OneToOne relationship
	@OneToOne(mappedBy = "retailStore")
	private Product product;

	/**
	 * Constructor
	 */
	protected RetailStore() {
		
	}
	
	/**
	 * Constructor
	 * @param user
	 * @param name
	 * @param phone_number
	 * @param email
	 */
	public RetailStore(User user, String name, String phone_number, String email) {
		super();
		this.user = user;
		this.name = name;
		this.phone_number = phone_number;
		this.email = email;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Long getStore_id() {
		return store_id;
	}

	public void setStore_id(Long store_id) {
		this.store_id = store_id;
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
		return opening_hours;
	}

	public void setOpening_hours(String opening_hours) {
		this.opening_hours = opening_hours;
	}

	public String getCustomer_service() {
		return customer_service;
	}

	public void setCustomer_service(String customer_service) {
		this.customer_service = customer_service;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getImportant_notifications() {
		return important_notifications;
	}

	public void setImportant_notifications(String important_notifications) {
		this.important_notifications = important_notifications;
	}

	public String getLimitations() {
		return limitations;
	}

	public void setLimitations(String limitations) {
		this.limitations = limitations;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "RetailStore [user=" + user + ", store_id=" + store_id + ", name=" + name + ", address=" + address
				+ ", opening_hours=" + opening_hours + ", customer_service=" + customer_service + ", phone_number="
				+ phone_number + ", email=" + email + ", important_notifications=" + important_notifications
				+ ", limitations=" + limitations + "]";
	}

}
