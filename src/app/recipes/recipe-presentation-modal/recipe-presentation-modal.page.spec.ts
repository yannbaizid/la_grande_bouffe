import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipePresentationModalPage } from './recipe-presentation-modal.page';

describe('RecipePresentationModalPage', () => {
  let component: RecipePresentationModalPage;
  let fixture: ComponentFixture<RecipePresentationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipePresentationModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipePresentationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
