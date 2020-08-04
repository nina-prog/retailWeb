package praktikum.AIFB.PRIS.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

//Changes to make it better: interface +  class called name and enum defining that so it looks nicer

/**
 * This class represents the user table for the database
 * @author merti
 *
 */
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;
	
    @Column(unique = true)
	private String username;
    
	private String password;
	
	@Enumerated(EnumType.STRING)
    private Role role;
	
	//non-Owning (address) side of the OneToOne relationship
	@OneToOne(mappedBy = "user")
    private RetailStore retailStore;

	/**
	 * Constructor
	 */
	protected User() {
		
	}
	
	/**
	 * Constructor
	 * @param username
	 * @param role
	 */
	public User(String username, String password, Role role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}

	/**
	 * Getter
	 * @return id of user account
	 */
	public Long getId() {
		return user_id;
	}

	/**
	 * Getter
	 * @return password of user account
	 */
	public String getUsername() {
		return username;
	}
	
	/**
	 * Setter
	 * @param username
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	
	/**
	 * Getter
	 * @return role of user
	 */
	public Role getRole() {
		return role;
	}

	/**
	 * Setter
	 * @param role of user
	 */
	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", password=" + password + ", role=" + role
				+ ", retailStore=" + retailStore + "]";
	}

}
