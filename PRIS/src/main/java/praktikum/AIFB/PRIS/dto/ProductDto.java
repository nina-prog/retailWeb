package praktikum.AIFB.PRIS.dto;

import java.math.BigDecimal;
import lombok.Data;

@Data
public class ProductDto {
  private Long productId;
  private String name;
  private String categoryName;
  private Long storeId;
  private BigDecimal price;
  private byte[] picture;
  private String description;
  private String limitations;
  private Integer remainingStock;
}
