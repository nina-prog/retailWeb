package praktikum.AIFB.PRIS.dto;

import lombok.Data;

@Data
public class StoreDto {
  private Long storeId;
  private String storeName;
  private AddressDto address;
  private String openingHours;
  private String customerService;
  private String phoneNumber;
  private String email;
  private String importantNotifications;
  private String limitations;
}
