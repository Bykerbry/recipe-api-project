import { Component, OnInit } from '@angular/core';
import { ShareService } from './../share.service'

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: [
    '../home/recipe-list/recipe-list.component.css',
     './favorites-page.component.css'
    ]
})
export class FavoritesPageComponent implements OnInit {
  favorites: [];
  constructor (private _share: ShareService) {
    this._share.currentData.subscribe((data: any) => this.favorites = data)
   }

  ngOnInit() {
  }

}
