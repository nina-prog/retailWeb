package praktikum.AIFB.PRIS.config.jwt;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Clock;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.DefaultClock;

/**
 * This class handles JWT token processing.
 *
 * @author merti
 *
 */
@Component
public class JwtTokenUtil implements Serializable {

  static final String CLAIM_KEY_USERNAME = "sub";
  static final String CLAIM_KEY_CREATED = "iat";
  private static final long serialVersionUID = -3301605591108950415L;
  private Clock clock = DefaultClock.INSTANCE;

  @Value("${jwt.signing.key.secret}")
  private String secret;

  @Value("${jwt.token.expiration.in.seconds}")
  private Long expiration;

  /**
   * Retrieve username from jwt token.
   *
   * @param token token which is examined
   * @return username from jwt token
   */
  public String getUsernameFromToken(String token) {
    return getClaimFromToken(token, Claims::getSubject);
  }

  /**
   * Retrieve date at which token was issued.
   *
   * @param token token which is examined
   * @return date token was issued at
   */
  public Date getIssuedAtDateFromToken(String token) {
    return getClaimFromToken(token, Claims::getIssuedAt);
  }

  /**
   * Retrieve expiration date from jwt token.
   *
   * @param token token which is examined
   * @return expiration date from token
   */
  public Date getExpirationDateFromToken(String token) {
    return getClaimFromToken(token, Claims::getExpiration);
  }

  /**
   * Retrieve claim from jwt token.
   *
   * @param token          token which is examined
   * @param claimsResolver function returning claim
   * @return claim (pieces of information asserted about a subject) from token
   */
  public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = getAllClaimsFromToken(token);
    return claimsResolver.apply(claims);
  }

  /**
   * Retrieve claims from jwt token.
   *
   * @param token token which is examined
   * @return all claims from token
   */
  private Claims getAllClaimsFromToken(String token) {
    // for retrieving any information from token we will need the secret key
    return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
  }

  /**
   * Check if the token has expired.
   *
   * @param token token which is examined
   * @return if token is expired (true) or not (false)
   */
  private Boolean isTokenExpired(String token) {
    final Date expiration = getExpirationDateFromToken(token);
    return expiration.before(clock.now());
  }

  private Boolean ignoreTokenExpiration(String token) {
    // here you specify tokens, for that the expiration is ignored
    return false;
  }

  /**
   * Generate token for user.
   *
   * @param userDetails for which token is generated
   * @return new generated token
   */
  public String generateToken(UserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();
    return doGenerateToken(claims, userDetails.getUsername());
  }

  /**
   * While creating the token 1. Define claims of the token, like Issuer,
   * Expiration, Subject, and the ID 2. Sign the JWT using the HS512 algorithm and
   * secret key. 3. According to JWS Compact Serialization
   * (https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41#section-3.1)
   * compaction of the JWT to a URL-safe string.
   *
   * @param claims  of token
   * @param subject of token
   * @return compaction of the JWT as a URL-safe string
   */
  private String doGenerateToken(Map<String, Object> claims, String subject) {
    final Date createdDate = clock.now();
    final Date expirationDate = calculateExpirationDate(createdDate);

    return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(createdDate)
        .setExpiration(expirationDate).signWith(SignatureAlgorithm.HS512, secret).compact();
  }

  /**
   * Check if token can be refreshed.
   *
   * @param token token which is examined
   * @return if token can be refreshed (true) or not (false)
   */
  public Boolean canTokenBeRefreshed(String token) {
    return (!isTokenExpired(token) || ignoreTokenExpiration(token));
  }

  /**
   * Refresh token for user.
   *
   * @param token token which is examined
   * @return compaction of the JWT as a URL-safe string
   */
  public String refreshToken(String token) {
    final Date createdDate = clock.now();
    final Date expirationDate = calculateExpirationDate(createdDate);

    final Claims claims = getAllClaimsFromToken(token);
    claims.setIssuedAt(createdDate);
    claims.setExpiration(expirationDate);

    return Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, secret).compact();
  }

  /**
   * Validate token.
   *
   * @param token token which is examined
   * @param user  details of current user
   * @return token being vaild (true) or not (false)
   */
  public Boolean validateToken(String token, UserDetails user) {
    final String username = getUsernameFromToken(token);
    return (username.equals(user.getUsername()) && !isTokenExpired(token));
  }

  /**
   * Calculates the expiration date for the token when creating it.
   *
   * @param createdDate date on which token was created
   * @return expiration date
   */
  private Date calculateExpirationDate(Date createdDate) {
    return new Date(createdDate.getTime() + expiration * 1000);
  }
}
