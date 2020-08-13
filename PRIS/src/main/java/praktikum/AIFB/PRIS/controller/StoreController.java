package praktikum.AIFB.PRIS.controller;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.service.RetailStoreService;

/**
 * This class handles the https requests regarding the retail store data.
 *
 * @author merti
 *
 */
//enable requests from frontend (other server) via @CrossOrigin
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StoreController {

  // help for analyzing issues in production
  public static final Logger log = LoggerFactory.getLogger(StoreController.class);

  @Autowired
  private RetailStoreService retailStoreService;

  // Single Item

  /**
   * View all informations of a retail store.
   *
   * @return RetailStore
   */
  @GetMapping("/{retailStore_id}/info")
  public RetailStore viewInfo(@PathVariable("retailStore_id") String retailStoreId) {
    return retailStoreService.findStore(retailStoreId);
  }

  /**
   * Handles exceptions in StoreController.
   *
   * @param req request URL
   * @param ex  exception which was thrown
   * @return error page with infos
   */
  @ExceptionHandler(Exception.class)
  public ModelAndView handleError(HttpServletRequest req, Exception ex) {
    log.error("Request: " + req.getRequestURL() + " raised " + ex);

    ModelAndView mav = new ModelAndView();
    mav.addObject("exception", ex);
    mav.addObject("url", req.getRequestURL());
    mav.setViewName("error");
    return mav;
  }

  /**
   * @RequestParam is used to read the form data and bind it automatically to the
   *               parameter present in the provided method.
   * @PathVariable indicates that a method parameter should be bound to a URI
   *               template variable. It has the following optional elements: name
   *               - name of the path variable to bind to required - tells whether
   *               the path variable is required value - alias for name
   */

}
