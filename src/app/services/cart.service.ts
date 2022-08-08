import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartList : any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}
    getproducts() {
      return this.productList.asObservable();
    }

    setproduct(product : any){
      this.cartList.push(...product);
      this.productList.next(product);
    }

    addtoCart(product : any){
      this.cartList.push(product);
      this.productList.next(this.cartList);
      this.gettotalprice()
    }

    gettotalprice(){
      let grandTotal = 0;
      this.cartList.map((a:any)=>{
        grandTotal += a.total;
      })
    }

    removeCartItem(product : any){
      this.cartList.map((a:any , index : any)=>{
        if (product.id===a.id){
          this.cartList.splice(index , 1);
        }
      })

       
    }


    removeAllCart (){
      this.cartList = [];
      this.productList.next(this.cartList);
    }
   
}
