import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, CartService } from '../cart.service';
import { Product } from '../product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  items: CartItem[]= [];
  totalSum = 0;
  
  constructor(private cartService: CartService, private router: Router){}
  
  ngOnInit(): void {
    this.items = this.cartService.items;  
    this.calculateTotal();
  }

  updateQuantity(p_product: Product, e: Event) {
    let quantity = (e.target as HTMLInputElement).valueAsNumber;
    this.cartService.updateQuantity(p_product, quantity);
    this.calculateTotal();
  }

  removeFromCart(p_product: Product) {
    this.cartService.removeFromCart(p_product);
    this.items = this.cartService.items;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalSum = this.cartService.getTotalSum();
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
