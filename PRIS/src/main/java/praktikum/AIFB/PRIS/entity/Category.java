package praktikum.AIFB.PRIS.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * This class represents the category table in the database
 * @author merti
 *
 */
@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer category_id;
	
	private String name;
	
	//non-Owning (address) side of the OneToOne relationship
	@OneToOne(mappedBy = "category")
	private Product product;
	
	/**
	 * Constructor
	 */
	protected Category() {
		
	}

	/**
	 * Constructor
	 * @param name
	 */
	public Category(String name) {
		super();
		this.name = name;
	}

	public Integer getCategory_id() {
		return category_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public void setCategory_id(Integer category_id) {
		this.category_id = category_id;
	}

	@Override
	public String toString() {
		return "Category [category_id=" + category_id + ", name=" + name + "]";
	}
	
}
