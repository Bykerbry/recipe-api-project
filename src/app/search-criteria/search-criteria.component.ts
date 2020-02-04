import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  addingFilters: boolean = false;
  @Output() onSearch = new EventEmitter<any>();

  constructor() { }

  onSearchRecipes(search: string) {
    this.onSearch.emit(search);
  }
  addFilters() {
    this.addingFilters = true;
  }
  ngOnInit() {
  }

}
