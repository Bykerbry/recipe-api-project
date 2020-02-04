import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    SearchCriteriaComponent,
    FavoritesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
