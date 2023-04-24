import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectQuestComponent } from './affect-quest.component';

describe('AffectQuestComponent', () => {
  let component: AffectQuestComponent;
  let fixture: ComponentFixture<AffectQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectQuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
