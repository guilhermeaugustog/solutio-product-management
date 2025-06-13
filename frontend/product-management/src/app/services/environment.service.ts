import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor() {}

  get productApiUrl(): string {
    return environment.productApiUrl;
  }

  get stockApiUrl(): string {
    return environment.stockApiUrl;
  }

  get isProduction(): boolean {
    return environment.production;
  }
} 