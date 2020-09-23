package praktikum.AIFB.PRIS.exception;

/**
 * This class represents an product not found exception.
 * 
 * @author merti
 *
 */
public class ProductNotFoundException extends RuntimeException {

  public ProductNotFoundException(Long id) {
    super("Could not find product " + id);
  }

}
