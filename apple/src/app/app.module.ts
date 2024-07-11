import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IphoneListComponent } from './iphone-list/iphone-list.component';
import { AppleAboutComponent } from './apple-about/apple-about.component';
import { CartComponent } from './cart/cart.component';
import { AppleStoreComponent } from './apple-store/apple-store.component';




@NgModule({
  declarations: [
    AppComponent,
    IphoneListComponent,
    AppleAboutComponent,
    CartComponent,
    AppleStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
