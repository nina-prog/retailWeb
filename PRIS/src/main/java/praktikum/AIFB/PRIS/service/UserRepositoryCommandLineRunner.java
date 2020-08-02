package praktikum.AIFB.PRIS.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import praktikum.AIFB.PRIS.entity.Role;
import praktikum.AIFB.PRIS.entity.User;
import praktikum.AIFB.PRIS.repositories.UserRepository;

/**
 * This class sets some User examples at project start in order to explore the web application.
 * This is not necessary for the web application itself but demonstrates it`s functions.
 * @author merti
 *
 */
@Component
public class UserRepositoryCommandLineRunner implements CommandLineRunner{

	//log id returned by creating the User in method run() (Logging: notieren der Zwischenzustände eines Programmes)
	public static final Logger log = LoggerFactory.getLogger(UserRepositoryCommandLineRunner.class);
	
	@Autowired
	private UserRepository userRepository;
	
	/**
	 * Insert Users examples
	 */
	@Override
	public void run(String... args) throws Exception {
		User user = new User("Max","Mueller",Role.ADMIN);
		//New User is generated: User [id=1, firstname=Max, lastname=Mueller, role=Admin]
		userRepository.save(user);
		log.info("New User is created: "+user);
	}

}
