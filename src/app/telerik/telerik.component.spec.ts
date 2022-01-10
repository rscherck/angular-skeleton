import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelerikComponent } from './telerik.component';

describe('TelerikComponent', () => {
  let component: TelerikComponent;
  let fixture: ComponentFixture<TelerikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelerikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelerikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
