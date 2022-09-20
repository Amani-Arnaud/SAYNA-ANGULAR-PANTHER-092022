import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccountServiceService } from '../services/account-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupFromData! : FormGroup;

  constructor(
    private titlePage: Title, // variable du titre de la page
    private service: AccountServiceService,  // injection des services account
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titlePage.setTitle("Inscription | BLACK PANTHER");
    this.signupFromData = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp(): void{
    this.service.signup(this.signupFromData).subscribe((res:any) => {
      alert('Utilisateur enrégistré' + res);
      this.signupFromData.reset();
      this.router.navigateByUrl('account/login');
    });
  }

}
