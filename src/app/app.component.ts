import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [ HeaderComponent,RouterOutlet], //RouterOutlet,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'firstangularapp';
}
