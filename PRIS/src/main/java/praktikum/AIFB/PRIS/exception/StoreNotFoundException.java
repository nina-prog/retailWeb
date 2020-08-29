package praktikum.AIFB.PRIS.exception;

/**
 * This class represents an store not found exception.
 * 
 * @author merti
 *
 */
public class StoreNotFoundException extends RuntimeException {

  public StoreNotFoundException(Long id) {
    super("Could not find store " + id);
  }

}
