import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGroupsEditModalComponent } from './material-groups-edit-modal.component';

describe('MaterialGroupsEditModalComponent', () => {
  let component: MaterialGroupsEditModalComponent;
  let fixture: ComponentFixture<MaterialGroupsEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialGroupsEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialGroupsEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
