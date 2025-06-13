import { Injectable } from '@angular/core';
import { Product, ProductInfo } from '../shared/types/product.types';
import { environment } from 'src/environments/environment.prod';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  async getProducts(): Promise<any> {
    const response : any = await axios.get(`${environment.productApiUrl}/api/products`);

    return response;
  }

  async addProduct(product: Product): Promise<any> {
    const response : any = await axios.post(`${environment.productApiUrl}/api/products`, product);

    return response;
  }

  async updateProduct(product: Product): Promise<any> {
    const auxProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    };

    const response : any = await axios.put(`${environment.productApiUrl}/api/products/${product.id}`, auxProduct);

    return response;
  }

  async deleteProduct(productId: number): Promise<any> {
    const response : any = await axios.delete(`${environment.productApiUrl}/api/products/${productId}`);

    return response;
  }
}
