package praktikum.AIFB.PRIS.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import praktikum.AIFB.PRIS.config.jwt.JwtAuthenticationEntryPoint;
import praktikum.AIFB.PRIS.config.jwt.JwtRequestFilter;

/**
 * This class represents the server configurations to manage authentication.
 *
 * @author merti
 *
 */
@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class AuthConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

  @Autowired
  private UserDetailsService jwtUserDetailsService;

  @Autowired
  private JwtRequestFilter jwtRequestFilter;

  @Value("${jwt.get.token.uri}")
  private String authenticationPath;

  /**
   * Configure AuthenticationManager so that it knows from where to load user for
   * matching credentials. Use BCryptPasswordEncoder.
   *
   * @param auth which creates authentication manager
   * @throws Exception if authentication manager has problems
   */
  @Autowired
  public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
  }

  @Bean
  public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
    return new PropertySourcesPlaceholderConfigurer();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  /**
   * Configure who has access to which URLs. Organize authorities and their needed
   * Authorization.
   */
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    // no need of CSRF
    http.csrf().disable()
        // authenticate particular requests
        .authorizeRequests().antMatchers("/adm/*").hasAuthority("ADMIN")
        .antMatchers("/store/{username}/*").hasAuthority("STORE").and()
        // make sure we use stateless session; session won't be used to
        // store user's state.
        .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

    // Add a filter to validate the tokens with every request
    http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
  }

  /**
   * Configure which URLs can be ignored by spring web security. Thus there is no
   * authentication.
   */
  @Override
  public void configure(WebSecurity webSecurity) throws Exception {
    // no authentification needed for specific URLs (login request,...)
    webSecurity.ignoring().antMatchers(HttpMethod.POST, authenticationPath)
        .antMatchers(HttpMethod.OPTIONS, "/**");
  }
}