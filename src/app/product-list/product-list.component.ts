import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [
    {id: 1, name: 'Uno'},
    {id: 2, name: 'Dos'},
    {id: 3, name: 'Tres'},
    {id: 4, name: 'Cuatro'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
