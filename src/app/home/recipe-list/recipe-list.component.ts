<<<<<<< HEAD:src/app/recipe-list/recipe-list.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';
import { IParams } from '../search-params.interface';
=======
import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../../recipe-api.service';
import { IParams } from '../../search-params.interface';
import { ShareService } from '../../share.service';
>>>>>>> f022e53b65c110b914df459ab5f55fd1541c73c9:src/app/home/recipe-list/recipe-list.component.ts


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[];
  favorites: any [] = []

  @Input() searchParameters: IParams;
<<<<<<< HEAD:src/app/recipe-list/recipe-list.component.ts
  
=======
  testArr: any;
  val1: any;
>>>>>>> f022e53b65c110b914df459ab5f55fd1541c73c9:src/app/home/recipe-list/recipe-list.component.ts
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
<<<<<<< HEAD:src/app/recipe-list/recipe-list.component.ts
  @Output () faves = new EventEmitter <boolean>();
  
  isFave : true;
  addToFavorites() {
    this.faves.emit();
  }
  onFavorite(recipe: any) {
      this.favorites.push(recipe);

    }
  }
  

  
=======
}

>>>>>>> f022e53b65c110b914df459ab5f55fd1541c73c9:src/app/home/recipe-list/recipe-list.component.ts
