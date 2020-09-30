package praktikum.AIFB.PRIS.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import praktikum.AIFB.PRIS.dto.AddressDto;
import praktikum.AIFB.PRIS.entity.Address;

/* This interface declares any required mapping method to map between address
 * entity and address DTO.
 * @author merti
 *
 */
@Mapper(componentModel = "spring")
public interface AddressMapper {

  /**
   * Map address entity instance to address Dto instance.
   *
   * @param address entity address
   * @return dto address
   */
  AddressDto addressToAddressDto(Address address);

  /**
   * Map address dto instance to address entity instance.
   *
   * @param address dto address
   * @return entity address
   */
  @Mapping(target = "addressId", ignore = true)
  Address addressDtoToAddress(AddressDto address);

  @Mapping(target = "addressId", ignore = true)
  void updateModel(AddressDto addressDto, @MappingTarget Address address);

}
