import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceslistComponent } from './resourceslist.component';

describe('ResourceslistComponent', () => {
  let component: ResourceslistComponent;
  let fixture: ComponentFixture<ResourceslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
