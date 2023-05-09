import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGroupsNewModalComponent } from './material-groups-new-modal.component';

describe('MaterialGroupsNewModalComponent', () => {
  let component: MaterialGroupsNewModalComponent;
  let fixture: ComponentFixture<MaterialGroupsNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialGroupsNewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialGroupsNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
