import { Injectable } from '@angular/core';
import * as API_LINKS from '../../util-links'; // importation des liens de l'api
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(
    private http: HttpClient
  ) { }

  login(){
    return this.http.get<any>(API_LINKS.SIGIN_URL).pipe(map((res)=>{
      return res;
    }));
  }

  signup(data:any):any{
    this.http.post<any>(API_LINKS.SIGIN_URL, data).pipe(map((res)=>{
      return res;
    }));
  }
}
