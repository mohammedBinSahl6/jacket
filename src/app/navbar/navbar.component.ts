import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cartService : CartService) { }
  totalItems : number = 0









  ngOnInit(): void {
    this.cartService.getproducts()
    .subscribe(res=>{
      this.totalItems = res.length;
    })
  }

}
