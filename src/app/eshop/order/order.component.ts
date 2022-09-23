import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  public ordered = false;


  constructor(
    private titlePage: Title, // variable du titre de la page
    private formBuilder: FormBuilder,
    private router: Router,
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


  // fonction d'enregistrement du client et des commandes
  signupUser(): void{
    let commande_ref = this.generateRef(8); // reference: un ensemble de caractere aleatoire
    
    if(this.service.signupAnonymous(this.signupFromData.value)){
      let data = {
        "ref_commande": commande_ref,
        "user": this.signupFromData.value.name,
        "address": this.signupFromData.value.address
      };
      if (this.service.storeOrder(data)) {
        for (const article of this.products) {
          let data_article = {
            "ref": commande_ref,
            "productId": article.productId,
            "productName": article.name,
            "price": article.price,
            "quantity": 1
          }
          if (this.service.storeArticles(data_article)) {
            // success store
            this.service.removeItemToCart(article.id);
          } else {
            // fail store
          }
        }
        // message afer storing Articles
        this.ordered = true;
        this.signupFromData.reset();
        //
      } else {
        this.ordered = false;
      }
    } else {
      this.ordered = false
      alert (" Inscription Echoué");
      this.router.navigateByUrl('/eshop/cart');
    }
  }

  generateRef(len: number) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var reference = '';
    for (var i=0; i<len; i++) {
     var rnum = Math.floor(Math.random() * chars.length);
     reference += chars.substring(rnum,rnum+1);
    }
    return reference;
   }

}
