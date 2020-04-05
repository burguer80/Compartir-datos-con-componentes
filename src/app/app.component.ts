import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: string[] = [
    '🖥',
    '🎮',
    '📱',
    '💻',
    '🔭',
    '📷',
  ];
  selectedProducts: string[] = [];


  addToShoppingCart($event) {
    this.selectedProducts = this.selectedProducts.concat($event);
  }
}
