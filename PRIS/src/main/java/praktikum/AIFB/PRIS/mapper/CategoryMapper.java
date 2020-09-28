package praktikum.AIFB.PRIS.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import praktikum.AIFB.PRIS.dto.CategoryDto;
import praktikum.AIFB.PRIS.entity.Category;

/* This interface declares any required mapping method to map between category
 * entity and category DTO.
 *
 * @author merti
 *
 */
@Mapper(componentModel = "spring")
public interface CategoryMapper {

  /**
   * Map category entity instance to category Dto instance.
   *
   * @param category entity category
   * @return dto category
   */
  CategoryDto categoryToCategoryDto(Category category);

  /**
   * Map category dto instance to category entity instance.
   *
   * @param category dto category
   * @return entity category
   */
  Category categoryDtoToCategory(CategoryDto category);

  List<CategoryDto> toCategoryDtos(List<Category> categories);

}
