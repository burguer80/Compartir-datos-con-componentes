import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <p>
      <button (click)="onProductClick()">+</button>
      <b>{{product}}</b>
    </p>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: string;

  onProductClick() {
    console.log(this.product);
  }
}
