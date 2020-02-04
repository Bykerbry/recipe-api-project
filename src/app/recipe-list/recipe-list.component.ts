import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeList : [];
  @Input() recipes: any;
  constructor(private _service: RecipeApiService) { }

  ngOnInit() {
    this._service.getRecipes('apple').subscribe((data: any) => this.recipeList = data.hits)
  }
  getList() {
    console.log(this.recipeList);
  }
}
