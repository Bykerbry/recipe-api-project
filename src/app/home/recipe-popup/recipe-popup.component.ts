import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-recipe-popup',
  templateUrl: './recipe-popup.component.html',
  styleUrls: ['./recipe-popup.component.css']
})
export class RecipePopupComponent implements OnInit {
  recipes: any;

  constructor(public dialogRef: MatDialogRef<RecipePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }

}
