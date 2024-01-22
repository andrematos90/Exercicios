import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoComponenteComponent } from './filho-componente.component';

describe('FilhoComponenteComponent', () => {
  let component: FilhoComponenteComponent;
  let fixture: ComponentFixture<FilhoComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilhoComponenteComponent]
    });
    fixture = TestBed.createComponent(FilhoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
