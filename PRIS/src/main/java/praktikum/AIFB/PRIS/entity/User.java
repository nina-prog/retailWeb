package praktikum.AIFB.PRIS.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

//Changes to make it better: interface +  class called name and enum defining that so it looks nicer

/**
 * This class represents the user table for the database.
 *
 * @author merti
 *
 */
@Data
@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private Long userId;

  @Column(unique = true)
  private String username;

  // make sure JSON Object send from server does not include hashed password
  @JsonIgnore
  private String password;

  @Enumerated(EnumType.STRING)
  private Role role;

  // non-Owning side of the OneToOne relationship
  @JsonIgnore
  @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
  private RetailStore retailStore;

  /**
   * Constructor.
   */
  public User() {

  }

  /**
   * Constructor.
   *
   * @param username username of the user account
   * @param password password of the user account
   * @param role     defines to what the user is authorized to do
   */
  public User(String username, String password, Role role) {
    super();
    this.username = username;
    this.password = password;
    this.role = role;
  }

  @JsonIgnore
  public String getPassword() {
    return password;
  }

  @JsonProperty
  public void setPassword(String password) {
    this.password = password;
  }

}
