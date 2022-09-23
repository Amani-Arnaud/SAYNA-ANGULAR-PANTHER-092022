import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccountServiceService } from './services/account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public userData: any;

  constructor(
    private titlePage: Title,
    private authService: AccountServiceService
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    this.titlePage.setTitle("Mon Compte | BLACK PANTHER")
  }

  logout(){
    this.authService.logout();
  }

}
