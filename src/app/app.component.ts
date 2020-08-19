import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RecipeWebService } from 'src/app/shared/webservices/recipeweb.service';
import { RecipeListService } from 'src/app/shared/services/recipe-list.service';
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
    private recipeWebService: RecipeWebService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.setRecipesList();
    console.log('array in observable:' + this.recipeListService.getRecipesList());
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
