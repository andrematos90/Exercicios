import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiComponenteComponent } from './pai-componente.component';

describe('PaiComponenteComponent', () => {
  let component: PaiComponenteComponent;
  let fixture: ComponentFixture<PaiComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiComponenteComponent]
    });
    fixture = TestBed.createComponent(PaiComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
