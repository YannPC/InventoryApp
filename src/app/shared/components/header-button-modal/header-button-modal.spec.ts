import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderButtonModal } from './header-button-modal';

describe('HeaderButtonModal', () => {
  let component: HeaderButtonModal;
  let fixture: ComponentFixture<HeaderButtonModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderButtonModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderButtonModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
