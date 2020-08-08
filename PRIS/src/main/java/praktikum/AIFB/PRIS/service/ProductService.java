/**
 * 
 */
package praktikum.AIFB.PRIS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import praktikum.AIFB.PRIS.entity.Product;
import praktikum.AIFB.PRIS.repositories.ProductRepository;

/**
 * @author merti
 *
 */
@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	public List<Product> findAll(){
		return repository.findAll();
	}
	
	public List<Product> findStoreProducts(String retailStoreId){
		return repository.findByRetailStore_storeId(Long.parseLong(retailStoreId));
	}
	
}
