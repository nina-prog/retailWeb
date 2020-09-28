package praktikum.AIFB.PRIS.dto;

import lombok.Data;

@Data
public class AddressDto {
  private Long addressId;
  private String streetName;
  private String houseNumber;
  private String district;
  private String postalCode;
  private String country;
}
