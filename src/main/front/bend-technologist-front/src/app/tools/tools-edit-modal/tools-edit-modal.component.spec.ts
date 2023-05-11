import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsEditModalComponent } from './tools-edit-modal.component';

describe('ToolsEditModalComponent', () => {
  let component: ToolsEditModalComponent;
  let fixture: ComponentFixture<ToolsEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
