import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccountServiceService } from '../services/account-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as APP_LINK from '../../util-links';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private titlePage: Title,
    private service: AccountServiceService,  // injection du service account
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Connexion | BLACK PANTHER");
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void{
    this.service.login().subscribe((result) => {
      const user = result.find((client: any) => {
        if (client.username === this.loginForm.value.username && client.password === this.loginForm.value.password) {
            localStorage.setItem('user', JSON.stringify(client));
            // console.log('user ' + JSON.parse(localStorage.getItem('user') || '{}').id);
          return true;
        } else {
          return false;
        }
      });
      if (user) {
        this.service.isUserLoggedIn = true;
        localStorage.setItem('isUserLoggedIn', this.service.isUserLoggedIn ? "true" : "false");
        localStorage.setItem('username', this.loginForm.value.username);
        alert('Vous êtes bien connecté !?');
        this.loginForm.reset();
        window.location.href = APP_LINK.APP_URL + "account";
      } else {
        alert('Echec de connection');
      }
    });
  }

}
