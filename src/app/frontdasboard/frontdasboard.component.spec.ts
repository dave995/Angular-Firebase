import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdasboardComponent } from './frontdasboard.component';

describe('FrontdasboardComponent', () => {
  let component: FrontdasboardComponent;
  let fixture: ComponentFixture<FrontdasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontdasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
