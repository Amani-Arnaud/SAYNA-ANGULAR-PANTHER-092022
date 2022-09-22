import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EshopServiceService } from '../services/eshop-service.service'; // Importation des services Eshop
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  public page:number = 1;

  public product:any;

  public simularProducts:any;


  productName = "Nom_du_produit";

  constructor(
    private titlePage: Title, // variable du titre de la page
    private service: EshopServiceService, // insjection du service eshop
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let productId = +this.route.snapshot.params['id'];
    this.service.getOneProduct(productId).subscribe((result)=>{
      this.product = result;
      this.productName = this.product?.name;
      this.titlePage.setTitle("Détail : " + this.productName);
      this.service.getSimularProducts(this.product.category, this.product.id).subscribe((res)=>{
        this.simularProducts = res;
      });
    });
  }

  // ajouter un article au panier
  addToCart(product:any){
    let addingProduct = new Product(product)
    if (this.service.addToCart(product)) {
      // message pour Item bien ajouté
      this.router.navigateByUrl("/eshop/cart");
      
    } else {
      // message UI pour Item non ajouter
      alert(" Le Produit n'a pas été ajouté au panier");
    }
  }

  //voir un produit simulaire
  viewSimular(productId:number){
    this.service.getOneProduct(productId).subscribe((result)=>{
      this.product = result;
      this.productName = this.product?.name;
      this.titlePage.setTitle("Détail : " + this.productName);
    });
  }

}
