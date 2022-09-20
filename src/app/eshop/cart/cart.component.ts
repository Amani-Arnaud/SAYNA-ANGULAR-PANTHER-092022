import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EshopServiceService } from '../services/eshop-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private titlePage: Title,
    private service: EshopServiceService,  // injection du service eshop
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Mon panier | BLACK PANTHER");
  }

}
