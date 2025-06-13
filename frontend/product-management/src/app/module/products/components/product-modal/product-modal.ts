import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@/shared/types/product.types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.scss'
})
export class ProductModalComponent {
  @Input() product: Product | null = null;
  @Input() mode: 'view' | 'edit' | 'create' = 'view';
  @Output() save = new EventEmitter<Product>();
  @Output() close = new EventEmitter<void>();

  form: Partial<Product> = {};

  ngOnInit() {
    if (this.product) this.form = { ...this.product };
  }

  onSave() {
    this.save.emit(this.form as Product);
  }

  onClose() {
    this.close.emit();
  }
} 