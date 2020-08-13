package praktikum.AIFB.PRIS.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * This class represents the server configurations to manage authentication.
 *
 * @author merti
 *
 */
@EnableWebSecurity
@Configuration
public class ServerConfig extends WebSecurityConfigurerAdapter {

  /**
   * Stop Spring Security from redirecting every HTTP request to log in form.
   */
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests().anyRequest().permitAll().and().formLogin().and().httpBasic();
  }
}