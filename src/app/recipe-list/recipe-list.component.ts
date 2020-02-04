import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes : [];
  constructor(private _service: RecipeApiService) { }

  ngOnInit() {
    this._service.getRecipes('apple').subscribe((data: any) => this.recipes = data)

  }
  getList() {
    console.log(this.recipes);
  }
}
