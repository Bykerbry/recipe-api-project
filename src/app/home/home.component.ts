import { Component, OnInit } from '@angular/core';
import { IParams } from '../search-params.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  searchParameters: IParams;

  setSearchParameters(search: IParams) {
    this.searchParameters = null
    setTimeout( () => {
      this.searchParameters = search
    }, 0); 
  }
  ngOnInit() {
  }

}
