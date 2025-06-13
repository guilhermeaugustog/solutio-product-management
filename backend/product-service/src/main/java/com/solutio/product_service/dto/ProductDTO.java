package com.solutio.product_service.dto;
import java.math.BigDecimal;
import lombok.Data;


@Data
public class ProductDTO {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer quantity;
}