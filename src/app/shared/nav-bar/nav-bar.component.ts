import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/account/services/account-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isUserLoggedIn = false;
  user:any = 'GUEST';

  constructor(private loginService: AccountServiceService) { }

  ngOnInit(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");
    if (storeData != null && storeData == "true") {
      this.isUserLoggedIn = true;
      this.user = localStorage.getItem("username");
    } else {
      this.isUserLoggedIn = false
    }
  }

}
