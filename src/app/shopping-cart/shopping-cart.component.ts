import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  template: `
  <p class="product-icon">
    {{productsBasket}}
  </p>
  `,
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input() productsBasket: string[] = ['💻', '🎮', '📱'];

  ngOnInit(): void {
  }

}
