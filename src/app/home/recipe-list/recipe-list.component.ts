import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../../recipe-api.service';
import { IParams } from '../../search-params.interface';
import { MatDialog } from '@angular/material';
import { ShareService } from '../../share.service';
import { RecipePopupComponent } from '../recipe-popup/recipe-popup.component';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[];
  @Input() searchParameters: IParams;
  testArr: any;
  val1: any;
  constructor(private _service: RecipeApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this._service.getRecipes(this.searchParameters).subscribe((data: any) => {
      this.recipes = data.hits.map((index: any) => index.recipe);
    })
  }

  getList() {
    console.log(this.searchParameters);
    console.log(this.recipes);
  }

  openDialog(recipe: any): void {
    let dialogRef = this.dialog.open(RecipePopupComponent, {
      data: recipe,
      width: "50%",
      panelClass: 'custom-dialog-container'
    })
  }
}

