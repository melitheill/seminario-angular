import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iphone } from '../iphone-list/Iphone';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
   

  @Input()
  quantity!: number;

  @Input()
  max!:number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

 moreQuantity(){
  if(this.quantity < this.max && this.max != 0)
     this.quantity++;
     this.quantityChange.emit(this.quantity);
}

lessQuantity(){
  if(this.quantity != 0) 
    this.quantity--;
    this.quantityChange.emit(this.quantity);
}

changeQuantity (event:any):void {
  if(event.keyCode<97 && event.keyCode>105){
    event.preventDefault();
  } this.quantityChange.emit(this.quantity);
 
}



  
}
