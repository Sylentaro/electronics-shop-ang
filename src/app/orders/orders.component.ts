import { Component, OnInit } from '@angular/core';
import { Order } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');

  ngOnInit(): void {
    const storageOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    this.orders = storageOrders;
  }
}
