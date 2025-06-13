package com.solutio.product_service.mapper;

import com.solutio.product_service.dto.ProductDTO;
import com.solutio.product_service.entity.Product;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import java.math.BigDecimal;

@Component
public class ProductMapper {
    
    private static final Logger logger = LoggerFactory.getLogger(ProductMapper.class);
    
    public ProductDTO toDTO(Product product) {
        if (product == null) return null;
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice() != null ? BigDecimal.valueOf(product.getPrice()) : null);
        dto.setQuantity(product.getQuantity());
        return dto;
    }
    
    public Product toEntity(ProductDTO dto) {
        if (dto == null) return null;
        Product product = new Product();
        product.setId(dto.getId());
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice() != null ? dto.getPrice().doubleValue() : null);
        product.setQuantity(dto.getQuantity());
        return product;
    }
} 