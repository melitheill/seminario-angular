import { Component } from '@angular/core';
import { Iphone } from './Iphone';

@Component({
  selector: 'app-iphone-list',
  templateUrl: './iphone-list.component.html',
  styleUrl: './iphone-list.component.scss'
})
export class IphoneListComponent {

  iphones : Iphone []   = [  
    { 
      model : 15,
      screen: 6.1,
      chip: "A16 Bionic",
      batery: "20 horas de reproducción de video",
      conection: "USB-C",
      price: 500,
      img: "/assets/iphone-15.png",
      stock: 3,
      sale: false,
      quantity: 0
    },
    { 
      model : 14,
      screen: 6.1,
      chip: "A15 Bionic",
      batery: "20 horas de reproducción de video",
      conection: "Lightning",
      price: 500,
      img: "/assets/iphone-14.png",
      stock : 10,
      sale: true,
      quantity:0
    },
    { 
      model : 13,
      screen: 6.1,
      chip: "A15 Bionic",
      batery: "20 horas de reproducción de video",
      conection: "Lightning",
      price: 500,
      img: "/assets/iphone-13.png",
      stock:0,
      sale: false,
      quantity:0,
    },

 ];

 constructor () {}

 moreQuantity(iphone:Iphone){
  if(iphone.quantity <= iphone.stock && iphone.stock != 0) iphone.quantity++;
}

lessQuantity(iphone:Iphone){
  if(iphone.quantity != 0) iphone.quantity--;
}

changeQuantity (event:any,iphone:Iphone):void {
  if(event.keyCode<97 && event.keyCode>105){
    event.preventDefault();
  }
 
}

}
