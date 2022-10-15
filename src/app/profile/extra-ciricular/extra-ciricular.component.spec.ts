import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCiricularComponent } from './extra-ciricular.component';

describe('ExtraCiricularComponent', () => {
  let component: ExtraCiricularComponent;
  let fixture: ComponentFixture<ExtraCiricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCiricularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCiricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
