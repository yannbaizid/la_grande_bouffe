import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipeWebService {
  baseUrl = 'http://localhost:8080/recipe/';
  constructor(private http: HttpClient) { }

  findAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl + 'find');
  }
}
