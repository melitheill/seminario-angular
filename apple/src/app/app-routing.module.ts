import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleStoreComponent } from './apple-store/apple-store.component';
import { AppleAboutComponent } from './apple-about/apple-about.component';


const routes: Routes = [
  {
    path :'', redirectTo : 'iphones', pathMatch : 'full'
  },
  {
    path: 'iphones', component: AppleStoreComponent
  },
  {
    path: 'about', component: AppleAboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
