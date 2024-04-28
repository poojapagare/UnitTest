import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPClientComponent } from './httpclient.component';

describe('HTTPClientComponent', () => {
  let component: HTTPClientComponent;
  let fixture: ComponentFixture<HTTPClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HTTPClientComponent]
    });
    fixture = TestBed.createComponent(HTTPClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
