import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildComponent } from './contentchild.component';

describe('ContentchildComponent', () => {
  let component: ContentchildComponent;
  let fixture: ComponentFixture<ContentchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentchildComponent]
    });
    fixture = TestBed.createComponent(ContentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
