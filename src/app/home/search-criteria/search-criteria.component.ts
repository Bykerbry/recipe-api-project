import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDiet } from '../../search-params.interface'
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  
  caloryRange: string;
  dietRestrictions: IDiet[] = [
    { name: 'balanced', checked: false },
    { name: 'high-protein', checked: false },
    { name: 'low-fat', checked: false },
    { name: 'low-carb', checked: false },
    { name: 'vegan', checked: false },
    { name: 'vegetarian', checked: false },
    { name: 'sugar-conscious', checked: false },
    { name: 'peanut-free', checked: false },
    { name: 'tree-nut-free', checked: false },
    { name: 'alcohol-free', checked: false }
  ]
  @Output() onRecipesSearched = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  onSearchRecipes(search: string) {
    this.onRecipesSearched.emit({
      query: search,
      dietFilters: this.dietRestrictions,
      calories: this.caloryRange
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      data: this.dietRestrictions,
      panelClass: 'custom-filter-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.caloryRange = result;
      console.log(this.caloryRange, this.dietRestrictions);
    });
  }
  
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
  }

  ngOnInit() {
  }

}
