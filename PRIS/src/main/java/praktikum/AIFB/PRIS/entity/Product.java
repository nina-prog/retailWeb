package praktikum.AIFB.PRIS.entity;

import java.math.BigDecimal;
import java.math.RoundingMode;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

/**
 * This class represents the product table in the database
 * @author merti
 *
 */
@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Long productId;
	
	//defines foreign key column category_id and indicates the owner of the ManyToOne relationship
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="category_id")
	private Category category;
	
	@Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] picture;
	
	private String name;
	
	private BigDecimal price;
	
	//defines foreign key column store_id and indicates the owner of the ManyToOne relationship
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="store_id")
	private RetailStore retailStore;
	
	private String description;
	
	private String limitations;
	
	@Column(name = "remaining_stock")
	private Integer remainingStock;

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

	public Long getProductId() {
		return productId;
	}

	public Category getCategory() {
		return category;
	}

	public byte[] getPicture() {
		return picture;
	}

	public String getName() {
		return name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public RetailStore getRetailStore() {
		return retailStore;
	}

	public String getDescription() {
		return description;
	}

	public String getLimitations() {
		return limitations;
	}

	public Integer getRemainingStock() {
		return remainingStock;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", category=" + category + ", name=" + name + ", price=" + price
				+ ", retailStore=" + retailStore + ", description=" + description + ", limitations=" + limitations
				+ ", remainingStock=" + remainingStock + "]";
	}
	
}