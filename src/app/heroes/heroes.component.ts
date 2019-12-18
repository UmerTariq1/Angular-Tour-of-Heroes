import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService) {
    
   }

  selected_hero : Hero;

  ShowHeroDetails(hero:Hero):void{
    this.selected_hero = hero;
    
  }

  getHeroes():void {
    this.heroes = this.heroService.getHeroes();

  }
  

  ngOnInit() {
    this.getHeroes();
  }

}
