import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDiet } from 'src/app/search-params.interface';


@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {

  caloryRange: string;

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>, @Inject(MAT_DIALOG_DATA) public diets: IDiet[]) { }

  dietDisplay(diet: string) {
    return diet.replace('-', ' ').substring(0, 1).toUpperCase() + diet.substring(1);
  }

  updateFilters(min: any, max: any) {
    if( min && max) {
      this.caloryRange = `&calories=${min}-${max}`;
    } else if(!min && max) {
      this.caloryRange = `&calories=${max}`;
    } else if (min && !max) {
      this.caloryRange = `&calories=${min}%2B`;
    } else {
      this.caloryRange = null;
    };
    this.dialogRef.close(this.caloryRange);
  }

  ngOnInit() {
  }


}
