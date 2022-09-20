import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccountServiceService } from '../services/account-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    console.log("user: " + this.loginForm.value.username);
    this.service.login().subscribe((result) => {
      const user = result.find((client: any) => {
        return (client.username === this.loginForm.value.username && client.password === this.loginForm.value.password);
      });
      if (user) {
        alert('Vous êtes bien connecté !?');
        this.loginForm.reset();
        this.router.navigateByUrl('account');
      } else {
        alert('Echec de connection');
      }
    });
  }

}
