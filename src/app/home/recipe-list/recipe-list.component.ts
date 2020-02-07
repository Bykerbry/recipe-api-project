import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../../recipe-api.service';
import { IParams } from '../../search-params.interface';
import { ShareService } from '../../share.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[];
  favorites: any[] = []

  @Input() searchParameters: IParams;
  testArr: any;
  val1: any;
  constructor(private _service: RecipeApiService, private _share: ShareService) { }

  ngOnInit() { 
    this._service.getRecipes(this.searchParameters).subscribe((data: any) => {
      this.recipes = data.hits.map((index: any) => index.recipe);
    })
  }
  getList() {
    console.log(this.searchParameters);
    console.log(this.recipes);
  }

  onFavorite(recipes)
   {
    this.favorites.push(recipes);
    console.log(this.favorites);
    this._share.changeData(this.favorites)

  }
  onRemove(recipe) {
    this.favorites.splice(recipe)
  }
  sendData() {
    this._share.changeData(this.favorites)
  }
}




