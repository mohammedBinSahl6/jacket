import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CapsComponent } from './caps/caps.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { CartService } from './services/cart.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { CheckComponent } from './check/check.component';
import { FormControl } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    HomeComponent,
    CapsComponent,
    AboutComponent,
    FavoritesComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path : 'home', component : HomeComponent},
      {path : 'cart' ,component: CartComponent},
      {path : 'caps' , component : CapsComponent},
      {path:'about', component:AboutComponent},
      {path:'favorites', component:FavoritesComponent },
      {path : 'check' , component : CheckComponent}
    ]),
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
