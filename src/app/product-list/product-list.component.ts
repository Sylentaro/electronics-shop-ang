import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  //filteredProducts: Product[] = [];
  searchText: string = '';
  currentSort: string = 'id';

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    const sortedProducts = this.products.sort((a, b) => a.id - b.id);

    this.products = [...sortedProducts]
  }

  sortHandler(e?: Event) {

    if (e) {
      const sortBy = (e.target as HTMLSelectElement).value;
      this.currentSort = sortBy;
    }

    let sortedProducts: Product[] = [...this.products];
    
    if (this.currentSort === 'name') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (this.currentSort  === 'id'){
      sortedProducts.sort((a, b) => a.id - b.id);
    }
    else if (this.currentSort === 'price') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    this.products = [...sortedProducts];
  }
  
  refetchAndSort() {
    this.products = this.productService.getAllProducts();
    this.sortHandler();
  }

  seekProducts(e: Event) {
    const inputValue = (e.target as HTMLInputElement).value;
    this.searchText = inputValue.toLowerCase();
    
    this.filterProducts();
  }

  filterProducts() {
    this.refetchAndSort();

    if (!this.searchText) {
      return;
    }
    const filteredProducts = this.products.filter(item => item.name.toLowerCase().includes(this.searchText));
    this.products = [...filteredProducts]
  }

}
