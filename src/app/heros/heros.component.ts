import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hero : Hero={
    id : 1,
    name : 'Wisdome'
  };
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero );
  }
}
