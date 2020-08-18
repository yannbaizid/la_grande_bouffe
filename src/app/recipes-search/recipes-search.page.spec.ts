import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecipesSearchPage } from './recipes-search.page';

describe('RecipesSearchPage', () => {
  let component: RecipesSearchPage;
  let fixture: ComponentFixture<RecipesSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesSearchPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
