export interface IParams {
    query: string;
    dietFilters: object[];
    calories: string;
}
export interface IDiet {
    name: string;
    checked: boolean;
}
export interface IRecipe {
    name: string;
    image: string;
    url: string;
    calories: number;
    servings: number;
    prepTime: number;
    ingredients: string[];
}