import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewletterSectionComponent } from './newletter-section.component';

describe('NewletterSectionComponent', () => {
  let component: NewletterSectionComponent;
  let fixture: ComponentFixture<NewletterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewletterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewletterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
