import {Component} from '@angular/core';
import {Product} from './product.model';

/**
 * @InventoryApp: the top-level component for our application
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product(
        'Jacket',
        'Black Jacket',
        '/assets/images/products/black-jacket.jpg',
        ['Men', 'Accessories', 'Jackets'],
        99.99),
      new Product(
        'Jeans',
        'Black Jeans',
        '/assets/images/products/black-jeans.jpg',
        ['Men', 'Accessories', 'Jenas'],
        69.99)
    ];

  }

  productWasSelected(product: Product): void {
    console.log('Product Clicked', product);
  }

}
