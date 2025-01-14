import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(){
    console.log("This");
  }
  cartItem=inject(CartService);  

  // get CartItems(): Product[]{
  // *check if timeout
  //   return this.cartItem.cart();
  // }
  // get TestingGettingCartItems(): Product[]{
  //   return this.cartItem.cart();
  // }
}
