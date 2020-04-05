import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <span class="product-icon">{{product}}</span>
    <div>
      <button (click)="onProductClick()">+Agregar</button>
    </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: string;

  onProductClick() {
    console.log(this.product);
  }
}
