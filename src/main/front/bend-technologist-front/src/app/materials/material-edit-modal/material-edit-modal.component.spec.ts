import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEditModalComponent } from './material-edit-modal.component';

describe('MaterialEditModalComponent', () => {
  let component: MaterialEditModalComponent;
  let fixture: ComponentFixture<MaterialEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
