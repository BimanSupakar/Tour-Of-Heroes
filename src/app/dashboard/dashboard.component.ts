import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  currentRate = 0;

  heroes : Hero[] =[];


  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getTopHeroes();
    
  }
  getTopHeroes() {
    this.heroService.getHeroes().subscribe(data =>this.heroes = data.slice(1 ,5));
  }


}
