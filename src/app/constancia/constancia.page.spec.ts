import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaPage } from './constancia.page';

describe('ConstanciaPage', () => {
  let component: ConstanciaPage;
  let fixture: ComponentFixture<ConstanciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
