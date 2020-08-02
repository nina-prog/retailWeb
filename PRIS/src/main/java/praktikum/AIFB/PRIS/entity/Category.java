package praktikum.AIFB.PRIS.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
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
	@GeneratedValue
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
	
	//Getter & Setter if needed

	@Override
	public String toString() {
		return "Category [category_id=" + category_id + ", name=" + name + "]";
	}
	
}
