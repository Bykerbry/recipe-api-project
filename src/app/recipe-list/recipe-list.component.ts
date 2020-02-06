import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';
import { IParams } from '../search-params.interface';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[];
  favorites: any [] = []

  @Input() searchParameters: IParams;
  
  constructor(private _service: RecipeApiService) { }

  ngOnInit() { 
    this._service.getRecipes(this.searchParameters).subscribe((data: any) => {
      this.recipes = data.hits.map((index: any) => index.recipe);
    })
  }
  getList() {
    console.log(this.searchParameters);
    console.log(this.recipes);
  }
  @Output () faves = new EventEmitter <boolean>();
  
  isFave : true;
  addToFavorites() {
    this.faves.emit();
  }
  onFavorite(recipe: any) {
      this.favorites.push(recipe);

    }
  }
  

  
