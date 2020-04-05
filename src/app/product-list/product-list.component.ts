import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [
    {id: 1, name: 'Producto uno.'},
    {id: 2, name: 'Producto dos.'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
