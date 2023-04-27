import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardFixedComponent } from './content-card-fixed.component';

describe('ContentCardFixedComponent', () => {
  let component: ContentCardFixedComponent;
  let fixture: ComponentFixture<ContentCardFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCardFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCardFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
