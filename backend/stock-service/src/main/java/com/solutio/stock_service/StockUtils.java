package com.solutio.stock_service;

public class StockUtils {
    public static String getStockStatus(int stockQuantity) {
      if (stockQuantity == 0) return "Out of stock";
      if (stockQuantity < 10) return "Low stock";
      
      return "Stock available";
    }
} 