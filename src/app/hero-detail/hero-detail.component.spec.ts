import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;


    const heroServiceStub = TestBed.get(HeroService);
      spyOn(heroServiceStub, "getHero").and.returnValue(
        of({
          id: 123,
          name: "Alan"
        })
      );


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("Displays content when initialized with a hero", () => {
    const anyDiv = fixture.debugElement.query(By.css("div"));
    expect(anyDiv).toBeTruthy();
  });


  it("Shows hero id", () => {
    const div: HTMLDivElement = fixture.debugElement.query(
      By.css("div div") // first inner div
    ).nativeElement;
    expect(div.textContent).toContain("id: 123");
  });

  
});
