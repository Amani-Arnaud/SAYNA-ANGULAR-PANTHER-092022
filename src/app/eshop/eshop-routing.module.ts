import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { CartComponent } from './cart/cart.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EshopComponent } from './eshop.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: EshopComponent },
  { path: 'detail-product/:id', component:DetailProductComponent},
  { path: 'cart', component:CartComponent},
  { path: 'order', component:OrderComponent},

  { path: '**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EshopRoutingModule { }
