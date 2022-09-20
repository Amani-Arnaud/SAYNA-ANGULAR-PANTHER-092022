import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EshopServiceService } from '../services/eshop-service.service'; // Importation des services Eshop

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  productName = "Nom_du_produit";

  constructor(
    private titlePage: Title, // variable du titre de la page
    private service: EshopServiceService, // insjection du service eshop
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Détail : " + this.productName);
  }

}
