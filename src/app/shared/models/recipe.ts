import { IngredientQuantified } from './ingredient-quantified';

export class Recipe {
id: number;
name: string;
difficulty: number;
preparationTime: number;
personsServed: number;
imageLink: string;
ingredientQuantifiedList: IngredientQuantified[];

}
