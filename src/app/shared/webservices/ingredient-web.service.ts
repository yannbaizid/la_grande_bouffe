import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientWebService {
  baseUrl = 'http://localhost:8080/ingredient/';
  constructor(private http: HttpClient) { }

  findAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.baseUrl + 'list');
  }
}
