import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  data: any;
  @Output() onSearch = new EventEmitter<any>();
  constructor(private _service: RecipeApiService) { }

  onSearchRecipes(search: string) {
    this._service.getRecipes(search).subscribe(response => {
      this.data = response;
      this.onSearch.emit(this.data);
      console.log(this.data);
    });
  }
  ngOnInit() {
  }

}
