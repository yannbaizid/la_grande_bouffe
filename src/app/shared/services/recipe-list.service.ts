import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {  Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  recipesList$ = new BehaviorSubject<Recipe[]>([]);

  getRecipesList(): Observable<Recipe[]> {
    return this.recipesList$.asObservable();
  }

  setRecipesList(value: Recipe[]) {
    this.recipesList$.next(value);
  }

  clearRecipesList() {
    this.recipesList$.next([]);
  }

  // Pour l'exemple
  errorRecipesList() {
    this.recipesList$.error('error in recipe-list observable service!');
  }

  // Pour l'exemple
  completeRecipesList() {
    this.recipesList$.complete();
  }

}
