import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';
import { IParams } from '../search-params.interface';
import { ShareService } from '../share.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[];
  @Input() searchParameters: IParams;
  private subscription: Subscription;
  testArr: any;
  constructor(private _service: RecipeApiService, private share: ShareService) { 
    this.subscription = this.share.currentMessage.subscribe(data => {
      console.log('in service');
      this.testArr = data
    });
    console.log(this.testArr);
  }

  ngOnInit() { 
    this._service.getRecipes(this.searchParameters).subscribe((data: any) => {
      this.recipes = data.hits.map((index: any) => index.recipe);
    })
  }

  getList() {
    console.log(this.searchParameters);
    console.log(this.recipes);
  }
}
