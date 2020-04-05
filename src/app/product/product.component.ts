import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <p>
      <button (click)="onProductClick()">+</button>
      {{product.id}} <b>{{product.name}}</b>
    </p>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;

  onProductClick() {
    console.log(this.product);
  }
}
