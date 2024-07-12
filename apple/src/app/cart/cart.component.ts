import { Component } from '@angular/core';
import { AppleCartService } from '../apple-cart.service';
import { Iphone } from '../iphone-list/Iphone';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  shopList$: Observable<Iphone[]>;
  constructor (private cart : AppleCartService){
    this.shopList$ = cart.shopList.asObservable()
  }
}
