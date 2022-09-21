import { Injectable } from '@angular/core';
import * as API_LINKS from '../../util-links'; // importation des liens de l'api
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  public isUserLoggedIn: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  login(){
    return this.http.get<any>(API_LINKS.SIGIN_URL).pipe(map((res)=>{
      return res;
    }));
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('username');
    window.location.href = API_LINKS.APP_URL + "account/login";
  }

  signup(data:any){
    try {
      this.http.post<any>(API_LINKS.SIGIN_URL, data).subscribe((result) => {});
      return true;
    } catch (error) {
      return false;
    }
  }
}
