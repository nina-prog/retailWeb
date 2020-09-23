package praktikum.AIFB.PRIS.exception;

/**
 * This class represents an user not found exception.
 * 
 * @author merti
 *
 */
public class UserNotFoundException extends RuntimeException {

  public UserNotFoundException(Long id) {
    super("Could not find user " + id);
  }
}
