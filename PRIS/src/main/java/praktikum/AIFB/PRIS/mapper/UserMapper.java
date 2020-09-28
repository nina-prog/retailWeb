package praktikum.AIFB.PRIS.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import praktikum.AIFB.PRIS.dto.UserDto;
import praktikum.AIFB.PRIS.entity.User;

/* This interface declares any required mapping method to map between account
 *  and account DTO.
 * @author merti
 *
 */
@Mapper(componentModel = "spring")
public interface UserMapper {

  @Mapping(source = "retailStore.storeId", target = "storeId")
  UserDto userToUserDto(User user);

  List<UserDto> toUserDtos(List<User> user);

}
