import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerObjComponent } from './ler-obj.component';

describe('LerObjComponent', () => {
  let component: LerObjComponent;
  let fixture: ComponentFixture<LerObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LerObjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adiciona um objeto a cena', () => {
    expect(component.scene.children.length).toEqual(2);
    component.ngOnInit();
    expect(component.scene.children.length).toEqual(3);
  });
});
