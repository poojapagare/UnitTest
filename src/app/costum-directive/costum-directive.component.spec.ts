import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumDirectiveComponent } from './costum-directive.component';

describe('CostumDirectiveComponent', () => {
  let component: CostumDirectiveComponent;
  let fixture: ComponentFixture<CostumDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumDirectiveComponent]
    });
    fixture = TestBed.createComponent(CostumDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
