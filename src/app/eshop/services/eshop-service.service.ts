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
  getSimularProducts(category:string){
    //
    return this.http.get<any>(API_LINKS.ALL_PRODUCTS + '/?category=' + category).pipe(map((res)=>{
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

  getItemCart(){
    return this.http.get<any>(API_LINKS.CART_URL).pipe(map((res)=>{
      return res;
    }));
  }

  removeItemToCart(productId: any){
    try {
      this.http.delete<any>(API_LINKS.CART_URL, productId).subscribe((result)=> {});
      return true;
    } catch (error) {
      return false;
    }
  }
}
