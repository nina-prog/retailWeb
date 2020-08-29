package praktikum.AIFB.PRIS.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
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

  private String password;

  @Enumerated(EnumType.STRING)
  private Role role;

  // non-Owning side of the OneToOne relationship
  @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
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
   * @param role     defines to what the user is authorized to do
   */
  public User(String username, String password, Role role) {
    super();
    this.username = username;
    this.password = password;
    this.role = role;
  }

}
