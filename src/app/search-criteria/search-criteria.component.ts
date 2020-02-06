import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IDiet } from '../search-params.interface';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  addingFilters: boolean = false;
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

  constructor() { }

  onSearchRecipes(search: string) {
    this.onRecipesSearched.emit({
      query: search,
      dietFilters: this.dietRestrictions,
      calories: this.caloryRange
    });
  }
  addFilters() {
    this.addingFilters = true;
  }
  stopFilters() {
    this.addingFilters = false;
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
    this.addingFilters = false;
  }
  dietDisplay(diet: string) {
    return diet.replace('-', ' ').substring(0, 1).toUpperCase() + diet.substring(1);
  }
  ngOnInit() {
  }

}
