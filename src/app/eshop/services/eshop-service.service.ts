import { Injectable } from '@angular/core';
import * as API_LINKS from '../../util-links';  // importation des liens de l'api
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EshopServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  // fonction pour recuperer tous les produits
  getProducts(){
    return this.http.get<any>(API_LINKS.ALL_PRODUCTS).pipe(map((res)=>{
      return res;
    }));
  }

  // Fonction pour recuperer un prodduit
  getOneProduct(id:number){
    //
    return this.http.get<any>(API_LINKS.ALL_PRODUCTS + '/' + id).pipe(map((res)=>{
      return res;
    }));
  }

  // fonction pour recuperer les produits simulaires
  getSimularProducts(category:string, currentProductId:number){
    //
    return this.http.get<any>(API_LINKS.ALL_PRODUCTS + '/?category=' + category + '&id_ne='+ currentProductId).pipe(map((res)=>{
      return res;
    }));
  }

  // fonction ajouter au panier
  addToCart(data:any){
    try {
      this.http.post<any>(API_LINKS.CART_URL, data).subscribe((result) => {});
      return true;
    } catch (error) {
      return false;
    }
  }

  //fonction pour ajouter au panier
  getItemCart(){
    return this.http.get<any>(API_LINKS.CART_URL).pipe(map((res)=>{
      return res;
    }));
  }

  //fonction pour suprimer du panier
  removeItemToCart(productId: any){
    console.log(API_LINKS.CART_URL + '/' + productId);
    try {
      this.http.delete<any>(API_LINKS.CART_URL + '/' + productId).subscribe((result)=> {});
      return true;
    } catch (error) {
      return false;
    }
  }

  // fonction vider le panier
  truncateCart(){
    try {
      this.http.delete<any>(API_LINKS.CART_URL).subscribe((result)=> {});
      return true;
    } catch (error) {
      return false;
    }
  }
  
  // signup user anonyme
  signupAnonymous(data:any){
      try {
        this.http.post<any>(API_LINKS.SIGNUP_URL, data).subscribe((result) => {});
        return true;
      } catch (error) {
        return false;
      }
  }

  // enregistrement d'une commande
  storeOrder(data:any){
    try {
      this.http.post<any>(API_LINKS.ORDER_URL, data).subscribe((result)=>{});
      return true;
    } catch (error) {
      return false;
    }
  }

  // enregistrement des articles de la commande
  storeArticles(data:any){
    try {
      this.http.post<any>(API_LINKS.ARTICLES_URL, data).subscribe((res)=>{});
      return true;
    } catch (error) {
      return false;
    }
  }
}
