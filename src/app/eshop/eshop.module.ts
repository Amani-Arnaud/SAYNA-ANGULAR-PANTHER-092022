import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { EshopComponent } from './eshop.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    EshopComponent,
    DetailProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    EshopRoutingModule
  ]
})
export class EshopModule { }
