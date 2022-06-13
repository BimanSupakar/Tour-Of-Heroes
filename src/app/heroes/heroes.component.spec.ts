import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroesComponent } from './heroes.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();



    //MOCK UP THE DATA 
    const heroServiceStub = TestBed.get(HeroService);
    //const heroServiceStub = TestBed.inject(HeroService);
    spyOn(heroServiceStub, "getHeroes").and.returnValue(
      of([
        {
          id: 1,
          name: "Alan",
        },
        {
          id: 2,
          name: "Brito",
        }
      ])
    );
    fixture.detectChanges();




  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });




  //TESTING FOR GET ALL HEROES
  it("Starts with the list of heroes returned by getHeroes, with link ref, id, and name", () => {
    const links: Array<HTMLAnchorElement> = fixture.debugElement
      .queryAll(By.css("a"))
      .map((a) => a.nativeElement);

    expect(links.length).toBe(2);

    expect(links[0].textContent).toContain("1 Alan");
    expect(links[0].getAttribute("href")).toBe("/detail/1");

    expect(links[1].textContent).toContain("2 Brito");
    expect(links[1].getAttribute("href")).toBe("/detail/2");
  });

  //Clicking the delete button removes the hero from the list and calls deleteHero
  it("Clicking the delete button removes the hero from the list and calls deleteHero", () => {
    const heroServiceStub = TestBed.get(HeroService);
    spyOn(heroServiceStub, "deleteHero");
  
    const delButton: HTMLButtonElement = fixture.debugElement.query(
      By.css("button.delete")
    ).nativeElement;
    delButton.click();
    fixture.detectChanges();
  
    const links: Array<HTMLAnchorElement> = fixture.debugElement
      .queryAll(By.css("a"))
      .map((a) => a.nativeElement);
  
    expect(links.length).toBe(1);
    expect(links[0].textContent).toContain("2 Brito");
    expect(links[0].getAttribute("href")).toBe("/detail/2");
  
    expect(heroServiceStub.deleteHero).toHaveBeenCalled();
  });



});
