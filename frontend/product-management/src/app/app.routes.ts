import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products/list', pathMatch: 'full' }, // Redirect root to products list
  { path: 'products', loadChildren: () => import('./module/products/products.routes').then(m => m.productsRoutes) },
  { path: '**', redirectTo: 'products/list' }, // Wildcard route for any unmatched paths
];
