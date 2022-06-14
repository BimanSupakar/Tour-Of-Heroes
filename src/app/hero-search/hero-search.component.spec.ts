import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../hero.service';

import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    const heroServiceStub = () => ({ searchHeroes: (term: any) => ({}) });
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ HeroSearchComponent ],
      providers: [{ provide: HeroService, useFactory: heroServiceStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("starts with an empty list", () => {
    fixture.detectChanges(); // Run the compnent lifecycle and update HTML
    const links: Array<HTMLAnchorElement> = fixture.debugElement
      .queryAll(By.css("a"))
      .map(a => a.nativeElement);
    expect(links.length).toBe(0);
  });
});
