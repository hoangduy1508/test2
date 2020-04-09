import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  IsAdd = true;
  heroEdit = {
    name: '',
    id: 0
  };
  notice_data = {};
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        console.log(hero)
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  before_edit(hero: Hero): void {
    this.IsAdd = false;
    this.heroEdit.name = hero.name;
    this.heroEdit.id = hero.id;
  }
  edit(hero: Hero): void {
    this.IsAdd = true;
    console.log(hero)
    this.heroService.updateHero(hero).subscribe(heroes => {
      this.heroes = [{
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
      }]
    });
  }

}