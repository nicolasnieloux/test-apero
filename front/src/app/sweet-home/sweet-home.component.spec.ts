import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetHomeComponent } from './sweet-home.component';

describe('SweetHomeComponent', () => {
  let component: SweetHomeComponent;
  let fixture: ComponentFixture<SweetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SweetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
