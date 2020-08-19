import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallFriendComponent } from './call-friend.component';

describe('CallFriendComponent', () => {
  let component: CallFriendComponent;
  let fixture: ComponentFixture<CallFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallFriendComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
