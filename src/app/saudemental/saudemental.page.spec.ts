import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudementalPage } from './saudemental.page';

describe('SaudementalPage', () => {
  let component: SaudementalPage;
  let fixture: ComponentFixture<SaudementalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudementalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudementalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
