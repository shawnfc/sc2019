import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioreelComponent } from './audioreel.component';

describe('AudioreelComponent', () => {
  let component: AudioreelComponent;
  let fixture: ComponentFixture<AudioreelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioreelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioreelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
