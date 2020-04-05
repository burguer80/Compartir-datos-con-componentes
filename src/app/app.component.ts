import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any[] = [
    {id: 1, name: 'Uno'},
    {id: 2, name: 'Dos'},
    {id: 3, name: 'Tres'},
    {id: 4, name: 'Cuatro'},
  ]
}
