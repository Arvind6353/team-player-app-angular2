/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeamsEditComponent } from './teams-edit.component';

describe('TeamsEditComponent', () => {
  let component: TeamsEditComponent;
  let fixture: ComponentFixture<TeamsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
