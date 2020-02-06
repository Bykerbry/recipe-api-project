import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './home/recipe-list/recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { SearchCriteriaComponent } from './home/search-criteria/search-criteria.component';
import { FavoritesPageComponent } from 'src/app/favorites-page/favorites-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    SearchCriteriaComponent,
    FavoritesPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
