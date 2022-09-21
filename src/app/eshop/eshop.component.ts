import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as api_link from '../util-links';
import { EshopServiceService } from './services/eshop-service.service';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss']
})
export class EshopComponent implements OnInit {

  public products:any;
  public cartItems:any;
  public indexPage:number = 1;

  constructor(
    private titlePage: Title,
    private serviceEshop: EshopServiceService,
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Catalogue | BLACK PANTHER");
    this.serviceEshop.getProducts().subscribe((result)=>{
      this.indexPage;
      this.products = result;
    });
    this.serviceEshop.getItemCart().subscribe((result)=>{
      this.cartItems = result;
    });
  }

  // tri par categorie
  changeCategory(category:string){
    if (category == "all") {
      this.serviceEshop.getProducts().subscribe((result)=>{
        this.products = result;
      });
    } else {
      this.serviceEshop.getSimularProducts(category).subscribe((result)=>{
        this.products = result;
      });
    }
  }

  // ajouter un article au panier
  addItemToCart(product:any){
    if (this.serviceEshop.addToCart(product)) {
      // message pour Item bien ajouté
      this.serviceEshop.getItemCart().subscribe((result)=>{
        this.cartItems = result;
      });
    } else {
      // message UI pour Item non ajouter
    }
  }

}
