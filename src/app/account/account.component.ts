import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccountServiceService } from './services/account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private titlePage: Title,
    private authService: AccountServiceService
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Mon Compte | BLACK PANTHER")
  }

  logout(){
    this.authService.logout();
  }

}
