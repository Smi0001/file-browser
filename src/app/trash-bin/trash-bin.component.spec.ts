import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashBinComponent } from './trash-bin.component';

describe('TrashBinComponent', () => {
  let component: TrashBinComponent;
  let fixture: ComponentFixture<TrashBinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashBinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
