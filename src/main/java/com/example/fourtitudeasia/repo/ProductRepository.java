package com.example.fourtitudeasia.repo;

import com.example.fourtitudeasia.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    void deleteProductByCode(String code);
    Product findByCode(String code);
}
