import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackDataComponent } from './pack-data.component';

describe('PackDataComponent', () => {
  let component: PackDataComponent;
  let fixture: ComponentFixture<PackDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
