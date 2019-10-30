import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero, InsightsService } from '../../core';
import { HeroService } from '../hero.service';
import { IPageViewTelemetry } from '@microsoft/applicationinsights-web';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  selected: Hero;
  heroes$: Observable<Hero[]>;
  message = '?';
  heroToDelete: Hero;
  showModal = false;

  constructor(
    private insightsService: InsightsService,
    private heroService: HeroService // , private modalService: ModalService
  ) {
    this.heroes$ = heroService.entities$;
  }

  ngOnInit() {
    this.getHeroes();
  }

  add(hero: Hero) {
    this.heroService.add(hero);
  }

  askToDelete(hero: Hero) {
    this.heroToDelete = hero;
    this.showModal = true;
    if (this.heroToDelete.name) {
      this.message = `Would you like to delete ${this.heroToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteHero() {
    this.closeModal();
    if (this.heroToDelete) {
      this.heroService.delete(this.heroToDelete.id).subscribe(() => (this.heroToDelete = null));
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = {} as any;
  }

  getHeroes() {
    const tel: IPageViewTelemetry = {
      name: 'heroes',
      uri: 'heroes/',
      properties: { hero: { id: '1', name: 'one', description: 'one desc' } as Hero }
      // measurements: ,
      // duration: 10
    };
    this.insightsService.trackPageView(tel);
    this.heroService.getAll();
    this.clear();
  }

  save(hero: Hero) {
    if (this.selected && this.selected.name) {
      this.update(hero);
    } else {
      this.add(hero);
    }
  }

  select(hero: Hero) {
    this.selected = hero;
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }
}
