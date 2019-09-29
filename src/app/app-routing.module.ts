import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddDishComponent} from './add-dish/add-dish.component';
import {SearchPageComponent} from './search-page/search-page.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: SearchPageComponent
  },
  {
    path: 'add',
    component: AddDishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
