package praktikum.AIFB.PRIS.entity;

import java.math.BigDecimal;
import java.math.RoundingMode;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

/**
 * This class represents the product table in the database
 * @author merti
 *
 */
@Entity
public class Product {

	private Integer product_id;
	
	//defines foreign key column category_id and indicates the owner of the OneToOne relationship
	@OneToOne
	@JoinColumn(name="category_id")
	private Category category;
	
	@Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] picture;
	
	private String name;
	
	private BigDecimal price;
	
	//defines foreign key column store_id and indicates the owner of the OneToOne relationship
	@OneToOne
	@JoinColumn(name="store_id", unique = true)
	private RetailStore retailStore;
	
	private String description;
	
	private String limitations;
	
	private Integer remaining_stock;

	/**
	 * Constructor
	 */
	protected Product() {
		
	}
	
	/**
	 * Constructor
	 * @param category
	 * @param name
	 * @param price
	 * @param retailStore
	 */
	public Product(Category category, String name, BigDecimal price, RetailStore retailStore) {
		super();
		this.category = category;
		this.name = name;
		this.price = price;
		this.retailStore = retailStore;
	}

	/**
	 * Converting bigDecimal scale (number of digits to the right of the decimal point) of price to 2
	 */
	@PrePersist
	@PreUpdate
	    public void pricePrecisionConvertion() {
	        // 
	        this.price.setScale(2, RoundingMode.HALF_UP);
	    }
	
	//Getter & Setter if needed

	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", category=" + category + ", name=" + name + ", price=" + price
				+ ", retailStore=" + retailStore + ", description=" + description + ", limitations=" + limitations
				+ ", remaining_stock=" + remaining_stock + "]";
	}
	
}
