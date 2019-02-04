import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherControlBarComponent } from './weather-control-bar.component';

describe('WeatherControlBarComponent', () => {
  let component: WeatherControlBarComponent;
  let fixture: ComponentFixture<WeatherControlBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherControlBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
