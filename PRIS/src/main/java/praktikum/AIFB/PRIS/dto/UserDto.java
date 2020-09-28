package praktikum.AIFB.PRIS.dto;

import lombok.Data;
import praktikum.AIFB.PRIS.entity.Role;

@Data
public class UserDto {
  private Long userId;
  private String username;
  private Role role;
  private Long storeId;
}
