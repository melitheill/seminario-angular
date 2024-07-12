import { Injectable } from '@angular/core';
import { Iphone } from './iphone-list/Iphone';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppleCartService {
  private _shopList : Iphone[] = [];
  shopList : BehaviorSubject<Iphone[]> = new BehaviorSubject (this._shopList);

  constructor() { }

  addCart(iphone: Iphone) {

   let item  = this._shopList.find((v1)=> v1.model == iphone.model)
   if(!item){
    this._shopList.push({... iphone});
   } else {
    item.quantity += iphone.quantity
   }
    
    this.shopList.next(this._shopList)
  }

  
}
