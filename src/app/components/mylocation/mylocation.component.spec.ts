import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylocationComponent } from './mylocation.component';

describe('MylocationComponent', () => {
  let component: MylocationComponent;
  let fixture: ComponentFixture<MylocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
