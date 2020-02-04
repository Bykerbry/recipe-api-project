import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe : [];
  @Input() search: any
  constructor(private _service: RecipeApiService) { }

  ngOnInit() {
    console.log(this.search); 
    this._service.getRecipes(this.search).subscribe((data: any) => this.recipe = data.hits)
  }
  getList() {
    console.log(this.recipe);
  }
}
