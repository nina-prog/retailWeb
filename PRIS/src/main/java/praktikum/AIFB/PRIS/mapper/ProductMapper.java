package praktikum.AIFB.PRIS.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import praktikum.AIFB.PRIS.dto.ProductDto;
import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.entity.RetailStore;

/**
 * This interface declares any required mapping method to map between product
 * entity and product DTO.
 * <p>
 * "@Mapper(componentModel = "spring")" tells MapStruct that when generating the
 * mapper implementation class, we'd like it to be created with the dependency
 * injection support via Spring so Spring can pick it up as a abean and we are
 * able to autowire it in another class.
 *
 * @author merti
 *
 */
@Mapper(componentModel = "spring", uses = { StoreMapper.class, CategoryMapper.class })
public interface ProductMapper {

  /**
   * Map product entity instance to product Dto instance.
   *
   * @param product entity product
   * @return dto product
   */
  @Mappings({ @Mapping(source = "product.category", target = "category"),
      @Mapping(source = "product.retailStore.storeId", target = "storeId") })
  ProductDto productToProductDto(Product product);

  /**
   * Map product Dto instance to product entity instance.
   *
   * @param productDto dto product
   * @return entity product
   */
  @Mappings({ @Mapping(source = "store", target = "retailStore"),
      @Mapping(source = "productDto.limitations", target = "limitations") })
  Product productDtoToProduct(ProductDto productDto, RetailStore store);

  // aggregated root

  /**
   * Map list of product entities to list of product DTOs.
   *
   * @param products List of product entities
   * @return list of product dto`s
   */
  List<ProductDto> toProductDtos(List<Product> products);

}
