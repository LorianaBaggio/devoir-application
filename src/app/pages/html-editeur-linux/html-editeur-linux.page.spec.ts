import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HtmlEditeurLinuxPage } from './html-editeur-linux.page';

describe('HtmlEditeurLinuxPage', () => {
  let component: HtmlEditeurLinuxPage;
  let fixture: ComponentFixture<HtmlEditeurLinuxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlEditeurLinuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlEditeurLinuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
