import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialThicknessComponent } from './material-thickness.component';

describe('MaterialThicknessComponent', () => {
  let component: MaterialThicknessComponent;
  let fixture: ComponentFixture<MaterialThicknessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialThicknessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialThicknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
