import { Identifiers } from '@angular/compiler';

export class Recette {
    intitule: string;
    difficulte: number;
    ingredients: string[];
    constructor(intitule: string,
                difficulte: number,
                ingredients: string[]) {
        this.intitule = intitule;
        this.ingredients = ingredients;
        this.difficulte = difficulte;
    }
}
