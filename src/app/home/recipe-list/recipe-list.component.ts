import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../../recipe-api.service';
import { IParams, IRecipe } from '../../interfaces';
import { MatDialog } from '@angular/material';
import { ShareService } from '../../share.service';
import { RecipePopupComponent } from '../recipe-popup/recipe-popup.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[];
  favorites: IRecipe[] = []
  noResults: boolean;
  error: boolean;

  @Input() searchParameters: IParams;
  testArr: any;
  val1: any;
  constructor(private _service: RecipeApiService, private _share: ShareService, public dialog: MatDialog, private _snackBar: MatSnackBar) { 
    this._share.currentData.subscribe(data => this.favorites = data)
  }

  ngOnInit() {
    this._service.getRecipes(this.searchParameters).subscribe(
      (data: any) => {
      this.recipes = data.hits.map((index: any): IRecipe => {
       return {
        name: index.recipe.label,
        image: index.recipe.image,
        url: index.recipe.url,
        calories: index.recipe.calories,
        servings: index.recipe.yield,
        prepTime: index.recipe.totalTime,
        ingredients: index.recipe.ingredientLines
       }
      });
      this.noResults = !this.recipes[0] 
      this.error = false;
    }, error => {
      console.log(error);
      this.error = true;
    })
  }

  onFavorite(recipes) {
    this.favorites.push(recipes);
    console.log(this.favorites);
    this._share.changeData(this.favorites)
  }

  onRemove(recipe) {
    this.favorites.splice(recipe)
  }
  
  openDialog(recipe: any): void {
    let dialogRef = this.dialog.open(RecipePopupComponent, {
      data: recipe,
      width: "50%",
      panelClass: 'custom-dialog-container'
    })
  }

  getCalories(kcal: number, servings: number) {
    if(kcal && servings) {
      return Math.round(kcal/servings);
    } else {
      return "Not Listed";
    }
  }
  openSnackBar() {
    this._snackBar.open('added to your favorites', 'dismiss', {
      duration: 3000
    })
  }

}


