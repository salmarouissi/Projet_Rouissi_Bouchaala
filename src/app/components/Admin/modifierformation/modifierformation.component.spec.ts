import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierformationComponent } from './modifierformation.component';

describe('ModifierformationComponent', () => {
  let component: ModifierformationComponent;
  let fixture: ComponentFixture<ModifierformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierformationComponent]
    });
    fixture = TestBed.createComponent(ModifierformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
