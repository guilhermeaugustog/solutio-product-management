import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  async getProductStockInfo(productId: number): Promise<any> {
    const response : any = await axios.get(`${environment.stockApiUrl}/api/stock/${productId}`);

    return response;
  }
}
