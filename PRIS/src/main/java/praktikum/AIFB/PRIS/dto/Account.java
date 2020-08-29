package praktikum.AIFB.PRIS.dto;

import lombok.Data;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.entity.User;

/**
 * This class represents the user account. (Data Transfer Object for adding,
 * deleting user)
 *
 * @author merti
 *
 */
@Data
public class Account {
  // possible since id can be null so request can also have no id
  private User user;
  private RetailStore store;
}
