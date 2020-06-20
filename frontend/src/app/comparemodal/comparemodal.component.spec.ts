import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparemodalComponent } from './comparemodal.component';

describe('ComparemodalComponent', () => {
  let component: ComparemodalComponent;
  let fixture: ComponentFixture<ComparemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
