import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = [{
        id: 1,
        name: 'duy1',
      }, {
        id: 2,
        name: 'duy2',
      },
      {
        id: 3,
        name: 'duy3',
      },
      {
        id: 4,
        name: 'duy4',
      }]);
  }
}