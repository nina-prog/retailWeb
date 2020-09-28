package praktikum.AIFB.PRIS.dto;

import java.io.Serializable;

/**
 * This class represents the token given back to frontend if user is authorized
 * (successfully logged in).
 * 
 * @author merti
 *
 */
public class JwtTokenResponse implements Serializable {
  private static final long serialVersionUID = 8317676219297719109L;

  private final String token;

  public JwtTokenResponse(String token) {
    this.token = token;
  }

  public String getToken() {
    return this.token;
  }
}
