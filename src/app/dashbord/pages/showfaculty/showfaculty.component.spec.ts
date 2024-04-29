import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfacultyComponent } from './showfaculty.component';

describe('ShowfacultyComponent', () => {
  let component: ShowfacultyComponent;
  let fixture: ComponentFixture<ShowfacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowfacultyComponent]
    });
    fixture = TestBed.createComponent(ShowfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
