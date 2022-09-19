import { NgModule, LOCALE_ID } from '@angular/core';
import * as fr from '@angular/common/locales/fr-CI';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WakandaComponent } from './wakanda/wakanda.component';
import { EnigmeComponent } from './enigme/enigme.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    WakandaComponent,
    EnigmeComponent,
    HomeComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-CI'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
