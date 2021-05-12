import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackinfoComponent } from './packinfo.component';

describe('PackinfoComponent', () => {
  let component: PackinfoComponent;
  let fixture: ComponentFixture<PackinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
