import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngularApplyWatchDigestPage } from './angular-apply-watch-digest.page';

describe('AngularApplyWatchDigestPage', () => {
  let component: AngularApplyWatchDigestPage;
  let fixture: ComponentFixture<AngularApplyWatchDigestPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularApplyWatchDigestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularApplyWatchDigestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
