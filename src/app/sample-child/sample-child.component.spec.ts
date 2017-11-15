/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleChildComponent } from './sample-child.component';

describe('SampleChildComponent', () => {
  let component: SampleChildComponent;
  let fixture: ComponentFixture<SampleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
