import { Component, OnInit } from '@angular/core';
import { IParams } from '../search-params.interface'
import { ShareService } from './../share.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  retrievedData: any;
  constructor(private _share: ShareService) {
    this._share.currentData.subscribe(data => this.retrievedData = data)
  }
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
 
