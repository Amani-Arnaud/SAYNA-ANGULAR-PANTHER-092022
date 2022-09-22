import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EshopServiceService } from '../services/eshop-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public signupFromData! : FormGroup;
  public products: any;
  public totalAmount: number = 0;
  public page: number = 0; // indice de pargination


  constructor(
    private titlePage: Title, // variable du titre de la page
    private formBuilder: FormBuilder,
    private service: EshopServiceService,  // injection du service eshop
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Inscription | BLACK PANTHER");

    this.signupFromData = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.service.getItemCart().subscribe((res)=>{
      this.products = res;
      this.totalAmount = 0;
      res.map((a:any)=>{
        this.totalAmount += +a.price;
      });
    });
  }

}
