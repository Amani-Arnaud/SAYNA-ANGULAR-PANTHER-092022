import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EshopServiceService } from '../services/eshop-service.service'; // Importation des services Eshop

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  public page:number = 1;

  public product:any;


  productName = "Nom_du_produit";

  constructor(
    private titlePage: Title, // variable du titre de la page
    private service: EshopServiceService, // insjection du service eshop
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let productId = +this.route.snapshot.params['id'];
    this.service.getOneProduct(productId).subscribe((result)=>{
      this.product = result;
      this.productName = this.product?.name;
      this.titlePage.setTitle("Détail : " + this.productName);
    });
  }

  // ajouter un article au panier
  addToCart(product:any){
    if (this.service.addToCart(product)) {
      // message pour Item bien ajouté
      
    } else {
      // message UI pour Item non ajouter
    }
  }

}
