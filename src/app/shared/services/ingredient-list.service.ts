import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientListService {

  ingredientsList$ = new BehaviorSubject<Ingredient[]>([]);

  getIngredientsList(): Observable<Ingredient[]> {
    return this.ingredientsList$.asObservable();
  }

  setIngredientsList(value: Ingredient[]) {
    this.ingredientsList$.next(value);
  }

  clearIngredientsList() {
    this.ingredientsList$.next([]);
  }

  // Pour l'exemple
  errorIngredientsList() {
    this.ingredientsList$.error('error in recipe-list observable service!');
  }

  // Pour l'exemple
  completeingredientsList() {
    this.ingredientsList$.complete();
  }

}
