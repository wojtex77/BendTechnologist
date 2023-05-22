import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEditModalComponent } from './result-edit-modal.component';

describe('ResultEditModalComponent', () => {
  let component: ResultEditModalComponent;
  let fixture: ComponentFixture<ResultEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
