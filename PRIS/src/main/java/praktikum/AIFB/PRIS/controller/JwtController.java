package praktikum.AIFB.PRIS.controller;

import java.util.Objects;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import praktikum.AIFB.PRIS.config.jwt.JwtTokenUtil;
import praktikum.AIFB.PRIS.dto.JwtTokenRequestDto;
import praktikum.AIFB.PRIS.dto.JwtTokenResponseDto;
import praktikum.AIFB.PRIS.dto.JwtUserDetailsDto;
import praktikum.AIFB.PRIS.exception.AuthenticationException;
import praktikum.AIFB.PRIS.service.JwtUserDetailsService;

/**
 * This class handles http requests regarding authentication.
 *
 * @author merti
 *
 */
//enable requests from frontend (other server) via @CrossOrigin
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class JwtController {

  @Value("${jwt.http.request.header}")
  private String tokenHeader;

  @Autowired
  private JwtTokenUtil jwtTokenUtil;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private JwtUserDetailsService userDetailsService;

  /**
   * Creating the JWT Token at login.
   *
   * @param authenticationRequest user details given at login
   * @return whole HTTP response(status code, header and body) with JWT Token
   * @throws AuthenticationException making sure user details are valid
   */
  // path located in application.properties file at jwtget.toke.uri
  @PostMapping("${jwt.get.token.uri}")
  public ResponseEntity<?> createAuthenticationToken(
      @RequestBody JwtTokenRequestDto authenticationRequest) throws AuthenticationException {
    // use spring security to check user details, if they are correct
    authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
    // load user details
    final UserDetails userDetails = userDetailsService
        .loadUserByUsername(authenticationRequest.getUsername());
    // create token
    final String token = jwtTokenUtil.generateToken(userDetails);
    // return token back
    return ResponseEntity.ok(new JwtTokenResponseDto(token));
  }

  /**
   * Refresh JWT token.
   *
   * @param request http request
   * @return refreshed token
   */
  @GetMapping("${jwt.refresh.token.uri}")
  public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
    // check if token in request is valid and then getting user details
    final String token = request.getHeader(tokenHeader).substring(7);
    String username = jwtTokenUtil.getUsernameFromToken(token);
    JwtUserDetailsDto user = (JwtUserDetailsDto) userDetailsService.loadUserByUsername(username);
    // also get expiration date, if all is matching create token and return it back
    if (jwtTokenUtil.canTokenBeRefreshed(token)) {
      String refreshedToken = jwtTokenUtil.refreshToken(token);
      return ResponseEntity.ok(new JwtTokenResponseDto(refreshedToken));
    } else {
      return ResponseEntity.badRequest().body(null);
    }
  }

  /**
   * Handle AuthenticationException.
   *
   * @param e exception
   * @return specific http response
   */
  @ExceptionHandler({ AuthenticationException.class })
  public ResponseEntity<String> handleAuthenticationException(AuthenticationException e) {
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
  }

  /**
   * Authenticate user.
   *
   * @param username username of user
   * @param password password of user
   */
  private void authenticate(String username, String password) {
    Objects.requireNonNull(username);
    Objects.requireNonNull(password);

    try {
      authenticationManager
          .authenticate(new UsernamePasswordAuthenticationToken(username, password));
    } catch (DisabledException e) {
      throw new AuthenticationException("USER_DISABLED", e);
    } catch (BadCredentialsException e) {
      throw new AuthenticationException("INVALID_CREDENTIALS", e);
    }
  }

}
