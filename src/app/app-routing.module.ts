import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CinepolisAngularComponent } from './cinepolis-angular/cinepolis-angular.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'sumar', component: OperasBasComponent},
  {path:'boleto', component: CinepolisAngularComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
