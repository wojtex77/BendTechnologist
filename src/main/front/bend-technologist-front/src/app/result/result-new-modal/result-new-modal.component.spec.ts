import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultNewModalComponent } from './result-new-modal.component';

describe('ResultNewModalComponent', () => {
  let component: ResultNewModalComponent;
  let fixture: ComponentFixture<ResultNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultNewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
