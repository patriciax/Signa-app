import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosPage } from './recibos.page';

describe('RecibosPage', () => {
  let component: RecibosPage;
  let fixture: ComponentFixture<RecibosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
