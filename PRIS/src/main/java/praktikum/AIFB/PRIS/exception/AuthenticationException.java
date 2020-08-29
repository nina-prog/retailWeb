package praktikum.AIFB.PRIS.exception;

/**
 * This class represents an authentication exception.
 *
 * @author merti
 *
 */
public class AuthenticationException extends RuntimeException {
  public AuthenticationException(String message, Throwable cause) {
    super(message, cause);
  }
}
