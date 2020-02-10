import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareService } from './../share.service';
import { IRecipe } from './../interfaces'
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: [
    '../home/recipe-list/recipe-list.component.css',
     './favorites-page.component.css'
    ]
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  favorites: IRecipe[];
  constructor (private _share: ShareService, private _snackBar: MatSnackBar) {
    this._share.currentData.subscribe((data: any) => this.favorites = data)
   }
  
  ngOnInit() {
  }

  onRemove(favorite: IRecipe) {
    var index = this.favorites.indexOf(favorite);
    this.favorites.splice(index, 1); 
  };

  getCalories(kcal: number, servings: number) {
    if(kcal && servings) {
      return Math.round(kcal/servings);
    } else {
      return "Not Listed";
    }
  }

  ngOnDestroy() {
    this._share.changeData(this.favorites);
  }

  openSnackBar() {
    this._snackBar.open('Removed from your favorites', 'dismiss', {
      duration: 3000
    })
  }

}
