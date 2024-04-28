import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropvshostComponent } from './propvshost.component';

describe('PropvshostComponent', () => {
  let component: PropvshostComponent;
  let fixture: ComponentFixture<PropvshostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropvshostComponent]
    });
    fixture = TestBed.createComponent(PropvshostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
