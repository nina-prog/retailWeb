package praktikum.AIFB.PRIS.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import praktikum.AIFB.PRIS.entity.Category;
import praktikum.AIFB.PRIS.repositories.CategoryRepository;

/**
 * This class handles main business logic considering categories in database.
 *
 * @author merti
 *
 */
public class CategoryService {

  @Autowired
  private CategoryRepository repo;

  /**
   * Retrieve all categories.
   *
   * @return list of all categories
   */
  public List<Category> findAllCategories() {
    return repo.findAll();
  }

  /**
   * Delete category.
   * 
   * @param categoryId id of category
   */
  public void deleteCategory(Integer categoryId) {
    repo.deleteById(categoryId);

  }

  /**
   * Add new category.
   * 
   * @param newCategory info about new category
   */
  public void addCategory(Category newCategory) {
    repo.save(newCategory);
  }

}
