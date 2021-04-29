import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HtmlEditeurWindowsPage } from './html-editeur-windows.page';

describe('HtmlEditeurWindowsPage', () => {
  let component: HtmlEditeurWindowsPage;
  let fixture: ComponentFixture<HtmlEditeurWindowsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlEditeurWindowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlEditeurWindowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
