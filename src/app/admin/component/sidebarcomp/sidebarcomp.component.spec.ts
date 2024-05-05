import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcompComponent } from './sidebarcomp.component';

describe('SidebarcompComponent', () => {
  let component: SidebarcompComponent;
  let fixture: ComponentFixture<SidebarcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarcompComponent]
    });
    fixture = TestBed.createComponent(SidebarcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
