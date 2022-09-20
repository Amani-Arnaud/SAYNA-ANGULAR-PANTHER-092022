import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private titlePage: Title,
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Mon Compte | BLACK PANTHER")
  }

}
