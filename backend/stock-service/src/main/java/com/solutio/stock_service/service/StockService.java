package com.solutio.stock_service.service;

import com.solutio.stock_service.StockUtils;
import com.solutio.stock_service.dto.ProductDTO;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class StockService {

    private final RestTemplate restTemplate;
    private final String productServiceUrl;

    @Autowired
    public StockService(RestTemplate restTemplate,
                       @Value("${product.service.url}") String productServiceUrl) {
        this.restTemplate = restTemplate;
        this.productServiceUrl = productServiceUrl;
    }

    public Map<String, Object> getProductStockInfo(Long productId) {
        ProductDTO productInfo = restTemplate.getForObject(productServiceUrl + "/api/products/" + productId, ProductDTO.class);
        if (productInfo == null)  throw new RuntimeException("Product not found");
        // if (productInfo.getQuantity() == null) productInfo.setQuantity(0);

        Map<String, Object> auxProductInfo = new HashMap<>();
        auxProductInfo.put("id", productInfo.getId());
        auxProductInfo.put("name", productInfo.getName());
        auxProductInfo.put("description", productInfo.getDescription());
        auxProductInfo.put("price", productInfo.getPrice());
        auxProductInfo.put("quantity", productInfo.getQuantity());
        auxProductInfo.put("stockStatus", StockUtils.getStockStatus(productInfo.getQuantity()));
      
        return auxProductInfo;
    }
} 