package com.example.fourtitudeasia.service;

import com.example.fourtitudeasia.entity.Product;
import com.example.fourtitudeasia.repo.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> listAllProduct() {
        return productRepository.findAll();
    }

    public Product findProductByCode(String code) {
        return productRepository.findByCode(code);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Transactional
    public void deleteProductByCode(String code) {
        Product existingProduct = productRepository.findByCode(code);

        if (existingProduct == null) {
            throw new EntityNotFoundException("Product with code: " + code + "not found");
        } else {
            productRepository.deleteProductByCode(code);
        }
    }

    public Product updateProduct(String code, Product updatedProduct) {
        Product existingProduct = productRepository.findByCode(code);

        if (existingProduct != null) {
            existingProduct.setCode(updatedProduct.getCode());
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setBrand(updatedProduct.getBrand());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setCategory(updatedProduct.getCategory());
            existingProduct.setType(updatedProduct.getType());
        } else {
            throw new IllegalArgumentException("Code not matched");
        }
        return productRepository.save(existingProduct);
    }
}
