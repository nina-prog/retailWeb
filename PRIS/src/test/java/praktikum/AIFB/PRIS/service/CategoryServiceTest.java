package praktikum.AIFB.PRIS.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import praktikum.AIFB.PRIS.entity.Category;
import praktikum.AIFB.PRIS.repositories.CategoryRepository;

/**
 * This class contains all tests for categoryService.
 *
 * @author merti
 *
 */
@SpringBootTest
class CategoryServiceTest {

  // Indicate that components or configurations created only for specific tests
  // should not be picked up by scanning from Spring Boot.
  @TestConfiguration
  static class CategoryServiceImplTestContextConfiguration {

    @Bean
    public CategoryService employeeService() {
      return new CategoryService();
    }
  }

  @Autowired
  private CategoryService categoryService;

  // Mockito helps to NOT communicate directly with repository, since these Tests
  // should only challenge service layer of categories.
  @MockBean
  private CategoryRepository categoryRepository;

  @BeforeEach
  public void setUp() {
    Category sweets = new Category("sweets");
    Category vegetables = new Category("vegetables");
    List<Category> categories = new ArrayList<>(List.of(vegetables, sweets));

    // bypass the method call to the actual repository and give something else back
    Mockito.when(categoryRepository.findAll()).thenReturn(categories);
  }

  /**
   * Test method findAllCategories.
   */
  @Test
  public void allCategorieShouldBeFound() {
    List<Category> found = categoryService.findAllCategories();
    assertEquals(found.get(0).getCatName(), "vegetables");
    assertEquals(found.get(1).getCatName(), "sweets");
  }

  /**
   * Test deleteCategory.
   */
  @Test
  public void whenDelete_thenCategoryShouldBeDeleted() {
    // when
    categoryService.deleteCategory(1);
    // then
    Mockito.verify(categoryRepository, times(1)).deleteById(1);
  }

}
