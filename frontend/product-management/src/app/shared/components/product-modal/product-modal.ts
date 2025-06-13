import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@/shared/types/product.types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type ModalMode = 'view' | 'edit' | 'create';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.scss'
})
export class ProductModalComponent {
  @Input() product: Product | null = null;
  @Input() mode: ModalMode = 'view';
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  form: Partial<Product> = {};

  ngOnInit() {
    if (this.product) {
      this.form = { ...this.product };
    }
  }

  isViewMode(): boolean {
    return this.mode === 'view';
  }

  onSave() {
    this.save.emit({product: this.form as any, mode: this.mode});
  }

  onClose() {
    this.close.emit();
  }
} 