import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-api-project';
  recipes: any;
  searched(recipes: any) {
    this.recipes = recipes
    console.log('from app-component');
    console.log(this.recipes);
  }
}
