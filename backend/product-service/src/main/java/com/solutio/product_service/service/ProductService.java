package com.solutio.product_service.service;

import com.solutio.product_service.dto.ProductDTO;
import com.solutio.product_service.entity.Product;
import com.solutio.product_service.mapper.ProductMapper;
import com.solutio.product_service.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public ProductService(ProductRepository productRepository, ProductMapper productMapper) {
      this.productRepository = productRepository;
      this.productMapper = productMapper;
    }

    @Transactional
    public ProductDTO createProduct(ProductDTO productDTO) {
      Product product = productMapper.toEntity(productDTO);
      Product savedProduct = productRepository.save(product);

      return productMapper.toDTO(savedProduct);
    }

    @Transactional
    public ProductDTO getProduct(Long id) {
      Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
      return productMapper.toDTO(product);
    }

    @Transactional
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAllByOrderByIdAsc().stream()
                .map(productMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {
        Product isProductExistant = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        
        Product productToUpdate = productMapper.toEntity(productDTO);
        productToUpdate.setId(id); 
        Product updatedProduct = productRepository.save(productToUpdate);
        
        return productMapper.toDTO(updatedProduct);
    }

    @Transactional
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Product not found");
        }
        productRepository.deleteById(id);
    }
} 