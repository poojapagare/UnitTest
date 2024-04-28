import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterObserverComponent } from './filterObserver.component';

describe('FilterComponent', () => {
  let component: FilterObserverComponent;
  let fixture: ComponentFixture<FilterObserverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterObserverComponent]
    });
    fixture = TestBed.createComponent(FilterObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
