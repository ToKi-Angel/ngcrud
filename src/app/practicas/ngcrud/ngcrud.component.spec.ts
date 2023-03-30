import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcrudComponent } from './ngcrud.component';

describe('NgcrudComponent', () => {
  let component: NgcrudComponent;
  let fixture: ComponentFixture<NgcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
