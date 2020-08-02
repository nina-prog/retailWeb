package praktikum.AIFB.PRIS.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
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
	@GeneratedValue
	private Integer store_id;
	
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

	//Getter & Setter if needed

	@Override
	public String toString() {
		return "RetailStore [user=" + user + ", store_id=" + store_id + ", name=" + name + ", address=" + address
				+ ", opening_hours=" + opening_hours + ", customer_service=" + customer_service + ", phone_number="
				+ phone_number + ", email=" + email + ", important_notifications=" + important_notifications
				+ ", limitations=" + limitations + "]";
	}

}
