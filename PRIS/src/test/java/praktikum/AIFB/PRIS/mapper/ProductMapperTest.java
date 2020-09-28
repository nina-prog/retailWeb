package praktikum.AIFB.PRIS.mapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import java.math.BigDecimal;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import lombok.extern.slf4j.Slf4j;
import praktikum.AIFB.PRIS.dto.ProductDto;
import praktikum.AIFB.PRIS.entity.Category;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.entity.RetailStore;
import praktikum.AIFB.PRIS.entity.Role;
import praktikum.AIFB.PRIS.entity.User;

@Slf4j
@SpringBootTest()
class ProductMapperTest {

  @Autowired
  private ProductMapper productMapper;

  @BeforeAll
  public static void setup() {
    log.info("Testing mapper between product entity and product dto...");
  }

  @Test
  public void test() {
    String hello = "Hello";
    assertTrue("Hello".equals(hello));
  }

  @Test
  public void shouldMapProductToDto() {
    // given
    User user = new User("username_1", "1", Role.STORE);
    RetailStore store = new RetailStore(user, "store", "1234", "store@example.org");
    Category cat = new Category("vegetables");
    Product entity = new Product(cat, "cucumber", new BigDecimal(0.99), store);
    // when
    ProductDto dto = productMapper.productToProductDto(entity);
    // then
    assertNotNull(dto);
    assertEquals(dto.getCategory(), entity.getCategory());
    assertEquals(dto.getName(), entity.getName());
    assertEquals(dto.getPrice(), entity.getPrice());
    assertEquals(dto.getProductId(), entity.getProductId());
    assertEquals(dto.getStoreId(), entity.getRetailStore().getStoreId());
  }

  @Test
  public void shouldMapDtoToProduct() {
    // given
    User user = new User("username_1", "1", Role.STORE);
    RetailStore store = new RetailStore(user, "store", "1234", "store@example.org");
    store.setStoreId(1L);
    Category category = new Category("vegetables");
    ProductDto dto = new ProductDto();
    dto.setCategory(category);
    dto.setDescription("description");
    dto.setLimitations("limitations");
    dto.setName("cucumber");
    dto.setPrice(new BigDecimal(1.99));
    dto.setProductId(1L);
    dto.setRemainingStock(1);
    dto.setStoreId(1L);
    // when
    Product entity = productMapper.productDtoToProduct(dto, store);
    // then
    assertNotNull(entity);
    assertEquals(entity.getCategory(), dto.getCategory());
    assertEquals(entity.getDescription(), dto.getDescription());
    assertEquals(entity.getLimitations(), dto.getLimitations());
    assertEquals(entity.getName(), dto.getName());
    assertEquals(entity.getPrice(), dto.getPrice());
    assertEquals(entity.getProductId(), dto.getProductId());
    assertEquals(entity.getRemainingStock(), dto.getRemainingStock());
    assertEquals(entity.getRetailStore().getStoreId(), dto.getStoreId());
  }

}
