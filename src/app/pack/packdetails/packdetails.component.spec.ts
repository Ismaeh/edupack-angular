import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackdetailsComponent } from './packdetails.component';

describe('PackdetailsComponent', () => {
  let component: PackdetailsComponent;
  let fixture: ComponentFixture<PackdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
