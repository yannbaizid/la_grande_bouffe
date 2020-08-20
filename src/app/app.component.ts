import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RecipeWebService } from 'src/app/shared/webservices/recipeweb.service';
import { RecipeListService } from 'src/app/shared/services/recipe-list.service';
import { IngredientListService } from './shared/services/ingredient-list.service';
import { IngredientWebService } from './shared/webservices/ingredient-web.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private recipeListService: RecipeListService,
    private recipeWebService: RecipeWebService,
    private ingredientsListService: IngredientListService,
    private ingredientsWebService: IngredientWebService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.setRecipesList();
    console.log('array in observable:' + this.recipeListService.getRecipesList());
    this.setIngredientsList();
  }
  setIngredientsList() {
    this.ingredientsWebService.findAll().subscribe(
      (values) => {
        this.ingredientsListService.setIngredientsList(values);
        console.log('salut je set les ingredients');
        console.log(values);
      }, (error) => {
        console.error('TestWebServiceComponent getPosts :', error);
        return null;
      }
    );
  }
  setRecipesList() {
    this.recipeWebService.findAll().subscribe(
      (values) => {
        this.recipeListService.setRecipesList(values);
        console.log(values);
      }, (error) => {
        console.error('TestWebServiceComponent getPosts :', error);
        return null;
      }
    );

  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
