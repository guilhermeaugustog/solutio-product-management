import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { ProductStock } from './pages/product-stock/product-stock';

export const productsRoutes: Routes = [
  { path: 'list', component: ProductList },
  { path: 'stock', component: ProductStock },
]; 