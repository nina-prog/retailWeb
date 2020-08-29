package praktikum.AIFB.PRIS.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * This class gives controllers advice what to do if a exception occurs.
 * 
 * @author merti
 *
 */
@ControllerAdvice
public class ExceptionAdvice {

  /**
   * Handle ProductNotFoundException.
   * 
   * @param ex exception
   * @return error message
   */
  @ResponseBody
  @ExceptionHandler(ProductNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  String productNotFoundHandler(ProductNotFoundException ex) {
    return ex.getMessage();
  }

  /**
   * Handle StoreNotFoundException.
   * 
   * @param ex excepiton
   * @return error message
   */
  @ResponseBody
  @ExceptionHandler(StoreNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  String storeNotFoundHandler(StoreNotFoundException ex) {
    return ex.getMessage();
  }

  /**
   * Handle UserNotFoundException.
   * 
   * @param ex exception
   * @return error message
   */
  @ResponseBody
  @ExceptionHandler(UserNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  String userNotFoundHandler(UserNotFoundException ex) {
    return ex.getMessage();
  }

}
