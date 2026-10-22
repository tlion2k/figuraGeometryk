import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrianguloComponent } from './triangulo.component';

describe('TrianguloComponent', () => {
  let component: TrianguloComponent;
  let fixture: ComponentFixture<TrianguloComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrianguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
