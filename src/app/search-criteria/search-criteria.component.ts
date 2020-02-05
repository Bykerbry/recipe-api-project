import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  addingFilters: boolean = false;
  @Output() onRecipesSearched = new EventEmitter<any>();

  constructor() { }

  onSearchRecipes(search: string) {
    this.onRecipesSearched.emit(search);
    console.log(search);
  }
  addFilters() {
    this.addingFilters = true;
  }
  ngOnInit() {
  }

}
