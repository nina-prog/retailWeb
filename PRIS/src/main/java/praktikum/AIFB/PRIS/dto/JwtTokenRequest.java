package praktikum.AIFB.PRIS.dto;

import java.io.Serializable;

/**
 * This class represents the User Details at Login which are needed for JWT
 * token request.
 *
 * @author merti
 *
 */
public class JwtTokenRequest implements Serializable {
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
  private String password;

  /**
   * Cosntructor.
   */
  public JwtTokenRequest() {
    super();
  }

  /**
   * Constructor.
   * 
   * @param username of user
   * @param password of user
   */
  public JwtTokenRequest(String username, String password) {
    this.setUsername(username);
    this.setPassword(password);
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
