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
  getProductId(id:number){
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
}
