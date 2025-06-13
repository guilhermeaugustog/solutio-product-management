package com.solutio.stock_service.controller;

import com.solutio.stock_service.service.StockService;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stock")
public class StockController {
  private final StockService stockService;

  public StockController(StockService stockService) {
    this.stockService = stockService;
  }

  @GetMapping("/{productId}")
  public ResponseEntity<Map<String, Object> > getProductStockInfo(@PathVariable Long productId) {
    return ResponseEntity.ok(stockService.getProductStockInfo(productId));
  }
} 