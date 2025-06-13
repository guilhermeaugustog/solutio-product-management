export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  stockStatus?: string; 
}

export interface ProductInfo {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
}

export interface ProductStockInfo {
  id: number;
  name: string;
  quantity: number;
  lowStock: boolean;
}