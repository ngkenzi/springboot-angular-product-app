package com.example.fourtitudeasia.controller;

import com.example.fourtitudeasia.entity.Product;
import com.example.fourtitudeasia.service.ProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    ProductService productService;

    //Response entity
    @GetMapping(value = "/products")
    public ResponseEntity<List<Product>> listAllProduct() {
        List<Product> p = productService.listAllProduct();
        if (p.isEmpty()) {
            return new ResponseEntity<>(p, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(p, HttpStatus.OK);
    }

    @GetMapping(value = "/products/{code}")
    public ResponseEntity<Product> findProductByCode(@PathVariable String code) {
        Product product = productService.findProductByCode(code);

        if (product == null) {
            return new ResponseEntity<>(product, HttpStatus.NO_CONTENT);
        } return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping(value = "/products")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        Product p = productService.addProduct(product);
        return new ResponseEntity<>(p, HttpStatus.CREATED);
    }

    @DeleteMapping("/products/{code}")
    public ResponseEntity<String> deleteProduct(@PathVariable String code) {
        productService.deleteProductByCode(code);
        return new ResponseEntity<>("Product deleted successfully" , HttpStatus.OK);
    }

    @PutMapping("/products/{code}")
    public ResponseEntity<Product> updateProduct(@PathVariable String code, @RequestBody Product product) {
        return new ResponseEntity<>(productService.updateProduct(code, product), HttpStatus.OK);
    }
}
