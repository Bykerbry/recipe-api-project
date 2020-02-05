import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'recipe-api-project';

  searchQuery: string;

  setSearchQuery(search: string) {
    console.log(search);
    this.searchQuery = ''
    setTimeout( () => {
      this.searchQuery = search
    }, 0); 
  }
}
