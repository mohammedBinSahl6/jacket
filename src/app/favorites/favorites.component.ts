import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private fav: CartService) { }
public favorite : any []= [];
  ngOnInit(): void { 
  }
  addfav(item :any){
    this.fav.addtoFavorite(item);
  }

}
