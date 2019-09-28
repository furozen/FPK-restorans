import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDishComponent,
    SearchPageComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
