import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {

  baseURL = "https://api.edamam.com/search?app_id=bb7d514e&app_key=b7720d4afeda1bdec24903c0be566841&q=";
  constructor(private http: HttpClient) { }

  getRecipes(q: string) {
    return this.http.get(this.baseURL + q);
  }
}
