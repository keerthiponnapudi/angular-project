import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBoardComponent } from './tool-board.component';

describe('ToolBoardComponent', () => {
  let component: ToolBoardComponent;
  let fixture: ComponentFixture<ToolBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
