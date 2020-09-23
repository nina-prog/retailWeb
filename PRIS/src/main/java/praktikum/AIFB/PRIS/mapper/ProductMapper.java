package praktikum.AIFB.PRIS.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Mappings;
import praktikum.AIFB.PRIS.dto.ProductDto;
import praktikum.AIFB.PRIS.entity.Product;

//need to add mapper for retailStore, category because they are used in this lists and in this transfer! add mapping classes as mapper (uses = ....)
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
@Mapper(componentModel = "spring")
public interface ProductMapper {

  /**
   * Map product entity instance to product Dto instance.
   *
   * @param product entity product
   * @return dto product
   */
  @Mappings({ @Mapping(source = "category.catName", target = "categoryName"),
      @Mapping(source = "retailStore.storeId", target = "storeId") })
  ProductDto productToProductDto(Product product);

  /**
   * Map product Dto instance to product entity instance.
   *
   * @param productDto dto product
   * @return entity product
   */
  @Mappings({ @Mapping(source = "categoryName", target = "category.catName"),
      @Mapping(source = "storeId", target = "retailStore.storeId") })
  Product productDtoToProduct(ProductDto productDto);

  /**
   * Update product with the latest values from a product DTO.
   *
   * @param productDto dto product
   * @param product    entity product
   */
  @Mappings({ @Mapping(source = "categoryName", target = "category.catName"),
      @Mapping(source = "storeId", target = "retailStore.storeId") })
  void updateModel(ProductDto productDto, @MappingTarget Product product);

  // aggregated root

  /**
   * Map list of product entities to list of product DTOs.
   *
   * @param products List of product entities
   * @return list of product dto`s
   */
  @Mappings({ @Mapping(source = "category.catName", target = "categoryName"),
      @Mapping(source = "retailStore.storeId", target = "storeId") })
  List<ProductDto> toProductDtos(List<Product> products);

}
