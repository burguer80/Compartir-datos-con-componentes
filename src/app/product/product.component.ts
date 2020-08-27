import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <span class="product-icon">{{product}}</span>
    <div>
      <button (click)="onProductClick()">+ Agregar</button>
    </div>
  `
})
export class ProductComponent {
  @Input() product: string;
  @Output() selectedEvent = new EventEmitter<string>();

  onProductClick() {
    this.selectedEvent.emit(this.product);
  }
}
