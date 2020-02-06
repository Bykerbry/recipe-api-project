import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';


const routes: Routes = [
  { path: 'Favorites', component: FavoritesPageComponent },
  { path: 'Home', component: RecipeListComponent},
  { path: 'Random', component: SearchCriteriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
