import { Component } from '@angular/core';
import { IParams } from './search-params.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'recipe-api-project';

  searchParameters: IParams;

  setSearchParameters(search: IParams) {
    this.searchParameters = null
    setTimeout( () => {
      this.searchParameters = search
    }, 0); 
  }
}
