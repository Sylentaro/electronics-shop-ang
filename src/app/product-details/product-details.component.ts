import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(productId);
  }

  addToCart(p_product: Product) {
    this.cartService.addToCart(p_product);
    alert('Dodano do koszyka produkt');
  }
}
