import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService, Order } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  formData = {
    firstName: '',
    lastName: '',
    phone: '',
    street: '',
    houseNumber: '',
    apartmentNumber: '',
    postalCode: '',
    city: ''
  }

  cartEmpty = false;

  constructor(private cartService: CartService, private router: Router){}
  
  ngOnInit(): void {
    if(this.cartService.loadCart().length === 0) {
      this.cartEmpty = true;
    }
  }

  onSubmit() {

    if (!this.formData.firstName || !this.formData.lastName || !this.formData.phone || !this.formData.street || 
      !this.formData.houseNumber || !this.formData.postalCode || !this.formData.city) {
      
      alert('Proszę uzupełnić/poprawić wymagane pola!');
      return;
    }

    const order: Order = {
      products: this.cartService.items,
      date: new Date(),
      details: { ...this.formData }
    }

    const orders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Pomyślnie złożono zamówienie!');
    
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}
