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
 * This class represents the user table for the database.
 *
 * @author merti
 *
 */
@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private Long userId;

  @Column(unique = true)
  private String username;

  private String password;

  @Enumerated(EnumType.STRING)
  private Role role;

  // non-Owning side of the OneToOne relationship
  @OneToOne(mappedBy = "user")
  private RetailStore retailStore;

  /**
   * Constructor.
   */
  protected User() {

  }

  /**
   * Constructor.
   *
   * @param username username of the user account
   * @param password password of the user account
   */
  public User(String username, String password) {
    super();
    this.username = username;
    this.password = password;
  }

  /**
   * Getter.
   *
   * @return id of user account
   */
  public Long getId() {
    return userId;
  }

  /**
   * Getter.
   *
   * @return password of user account
   */
  public String getUsername() {
    return username;
  }

  /**
   * Setter.
   *
   * @param username username of user account
   */
  public void setUsername(String username) {
    this.username = username;
  }

  /**
   * Getter.
   *
   * @return role
   */
  public Role getRole() {
    return role;
  }

  /**
   * Setter.
   *
   * @param role defines to what the user account is authorized to do (admin or
   *             regular user)
   */
  public void setRole(Role role) {
    this.role = role;
  }

  @Override
  public String toString() {
    return "User [userId=" + userId + ", username=" + username + ", password=" + password
        + ", role=" + role + ", retailStore=" + retailStore + "]";
  }

}
