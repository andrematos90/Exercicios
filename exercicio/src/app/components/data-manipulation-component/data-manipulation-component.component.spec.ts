import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManipulationComponentComponent } from './data-manipulation-component.component';

describe('DataManipulationComponentComponent', () => {
  let component: DataManipulationComponentComponent;
  let fixture: ComponentFixture<DataManipulationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataManipulationComponentComponent]
    });
    fixture = TestBed.createComponent(DataManipulationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
