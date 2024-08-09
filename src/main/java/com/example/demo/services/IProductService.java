package com.example.demo.services;

import com.example.demo.models.Product;

import java.util.List;

public interface IProductService {
    public List<Product> getProducts();

    public Product getProduct(String id);

    public Product addProduct(Product product);

    public Product updateProduct(String id, Product product);

    public void deleteProduct(String id);
}
