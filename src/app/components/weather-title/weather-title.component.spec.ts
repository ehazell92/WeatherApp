import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTitleComponent } from './weather-title.component';

describe('WeatherTitleComponent', () => {
  let component: WeatherTitleComponent;
  let fixture: ComponentFixture<WeatherTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
