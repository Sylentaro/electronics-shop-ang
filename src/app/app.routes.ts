import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent},
    { path: 'product/:id', component: ProductDetailsComponent},
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent},
    { path: 'orders', component: OrdersComponent }
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
};
