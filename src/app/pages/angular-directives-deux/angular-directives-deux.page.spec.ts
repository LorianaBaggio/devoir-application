import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngularDirectivesDeuxPage } from './angular-directives-deux.page';

describe('AngularDirectivesDeuxPage', () => {
  let component: AngularDirectivesDeuxPage;
  let fixture: ComponentFixture<AngularDirectivesDeuxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDirectivesDeuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularDirectivesDeuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
