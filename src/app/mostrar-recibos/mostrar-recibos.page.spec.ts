import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRecibosPage } from './mostrar-recibos.page';

describe('MostrarRecibosPage', () => {
  let component: MostrarRecibosPage;
  let fixture: ComponentFixture<MostrarRecibosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarRecibosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarRecibosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
