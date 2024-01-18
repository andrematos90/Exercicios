import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorEventosComponent } from './gerenciador-eventos.component';

describe('GerenciadorEventosComponent', () => {
  let component: GerenciadorEventosComponent;
  let fixture: ComponentFixture<GerenciadorEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciadorEventosComponent]
    });
    fixture = TestBed.createComponent(GerenciadorEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
