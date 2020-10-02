import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdnavbarComponent } from './mdnavbar.component';

describe('MdnavbarComponent', () => {
  let component: MdnavbarComponent;
  let fixture: ComponentFixture<MdnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
