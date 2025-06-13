import { ProductService } from '@/services/product.service';
import { Product } from '@/shared/types/product.types';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModalComponent } from '@/shared/components/product-modal/product-modal';
import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';
import { StockService } from '@/services/stock.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductModalComponent, ClickOutsideDirective],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products: Product[] = [];
  activeDropdownId: number | null = null;
  isLoading: boolean = false;
  showModal = false;
  selectedProduct: Product | null = null;
  modalMode: 'view' | 'edit' | 'create' = 'view';

  constructor(
    private productService: ProductService,
    private stockService: StockService
  ) {
  }

  ngOnInit() {
    this.fetchProducts();
  }

  async fetchProducts(): Promise<any> {
    this.isLoading = true;
    try {
      const productsResponse = await this.productService.getProducts();
      this.products = productsResponse.data.map((product: Product) => ({
        ...product,
        stockStatus: 'loading'
      }));

      // Fetch stock status for each product
      for (const product of this.products) {
        this.stockService.getProductStockInfo(product.id)
          .then((stockInfo) => {
            // Set the stockStatus based on the response
            product.stockStatus = stockInfo.data?.stockStatus || 'Unknown';
          })
          .catch(() => {
            product.stockStatus = 'Error';
          });
      }
    } catch (error) {
      this.products = [];
    } finally {
      this.isLoading = false;
    }
  }

  toggleDropdown(productId: number) {
    this.activeDropdownId = this.activeDropdownId === productId ? null : productId;
  }

  async editProduct(productId: number) {
    console.log(`Edit product with ID: ${productId}`);
    this.fetchProducts();
  }

  async deleteProduct(productId: number) {
    console.log(`Attempting to delete product with ID: ${productId}`);
    try {
      await this.productService.deleteProduct(productId);
      console.log(`Product with ID ${productId} deleted successfully. Re-fetching products...`);
      this.fetchProducts();
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
    }
  }

  openProductModal(mode: 'view' | 'edit' | 'create', product: Product | null = null) {
    this.selectedProduct = product;
    this.modalMode = mode;
    this.showModal = true;
  }

  async handleSave(modalData: any) {
    if (modalData.mode === 'create') {
      await this.productService.addProduct(modalData.product);
    } else if (modalData.mode === 'edit') {
      await this.productService.updateProduct(modalData.product);
    }

    this.showModal = false;
    await this.fetchProducts();
  }

  onDropdownClickOutside() {
    this.activeDropdownId = null;
  }
}
