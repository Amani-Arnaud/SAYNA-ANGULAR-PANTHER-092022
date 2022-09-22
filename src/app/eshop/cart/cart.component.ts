import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EshopServiceService } from '../services/eshop-service.service';
import * as APP_URL from 'src/app/util-links';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any;
  public totalAmount: number = 0;
  public pageCart: number = 0; // indice de pargination
  public img_url = APP_URL.IMAGE_URL;

  constructor(
    private titlePage: Title,
    private service: EshopServiceService,  // injection du service eshop
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Mon panier | BLACK PANTHER");
    this.service.getItemCart().subscribe((res)=>{
      this.products = res;
      this.totalAmount = 0;
      res.map((a:any)=>{
        this.totalAmount += +a.price;
      });
    });
  }

  removeArticle(id:number){
    if (this.service.removeItemToCart(id)) {
      this.service.getItemCart().subscribe((res)=>{
        this.products = res;
        this.totalAmount = 0;
        res.map((a:any)=>{
          this.totalAmount += +a.price;
        });
      });
    } else {
      alert("Le produit n'a pas été supprimer du panier");
    }
  }


}
