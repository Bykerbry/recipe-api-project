import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[];
  @Input() searchQuery: any
  constructor(private _service: RecipeApiService) { }

  ngOnInit() { 
    this.getRecipes(this.searchQuery);
    console.log(this.searchQuery);
  }
  getRecipes(search: string) {
    this._service.getRecipes(search).subscribe((data: any) => {
      this.recipes = data.hits.map((index: any) => index.recipe);
      console.log(this.recipes);
    })
  }
  getList() {
    console.log(this.searchQuery);
    console.log(this.recipes);
  }
}
