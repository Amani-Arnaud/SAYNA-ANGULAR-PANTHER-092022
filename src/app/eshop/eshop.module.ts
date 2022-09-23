import { LOCALE_ID, NgModule } from '@angular/core';
import * as fr from '@angular/common/locales/fr-CI';
import { CommonModule, registerLocaleData } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { EshopComponent } from './eshop.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartComponent } from './cart/cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EshopComponent,
    DetailProductComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    EshopRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-CI' },
  ]
})
export class EshopModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
