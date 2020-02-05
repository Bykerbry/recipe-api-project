import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IParams, IDiet } from './search-params.interface'


@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {

  baseURL: string = "https://api.edamam.com/search?app_id=bb7d514e&app_key=b7720d4afeda1bdec24903c0be566841&q=";

  constructor(private http: HttpClient) { }

  getRecipes(parameters: IParams) {
    let filters = parameters.dietFilters.filter((diet: IDiet) => diet.checked).map((diet: IDiet) => {
      if (diet.name === 'balanced' || diet.name === 'high-protein' || diet.name === 'low-carb' || diet.name === 'low-fat') {
        return `&diet=${diet.name}`
      } else {
        return `&health=${diet.name}`
      }
    }).join('');
    return this.http.get(`${this.baseURL}${parameters.query}
      ${parameters.calories ? parameters.calories : ''}${filters ? filters : ''}`)
  }
}
