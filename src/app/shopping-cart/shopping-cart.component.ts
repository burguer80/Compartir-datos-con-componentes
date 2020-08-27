import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  template: `
    <p class="product-icon">
      {{itemsList}}
    </p>
  `
})
export class ShoppingCartComponent {
  @Input() itemsList: string[] = [];
}
