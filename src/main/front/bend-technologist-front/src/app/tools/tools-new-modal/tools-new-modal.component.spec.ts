import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsNewModalComponent } from './tools-new-modal.component';

describe('ToolsNewModalComponent', () => {
  let component: ToolsNewModalComponent;
  let fixture: ComponentFixture<ToolsNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsNewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
