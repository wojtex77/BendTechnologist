import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialThicknessNewModalComponent } from './material-thickness-new-modal.component';

describe('MaterialThicknessNewModalComponent', () => {
  let component: MaterialThicknessNewModalComponent;
  let fixture: ComponentFixture<MaterialThicknessNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialThicknessNewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialThicknessNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
