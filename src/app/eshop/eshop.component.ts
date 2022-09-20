import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as api_link from '../util-links';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss']
})
export class EshopComponent implements OnInit {

  constructor(
    private titlePage: Title,
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Catalogue | BLACK PANTHER");
    console.log(api_link.ALL_PRODUCTS);
  }

}
