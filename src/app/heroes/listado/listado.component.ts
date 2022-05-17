import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarRandom(): void {
    const nroRnd = Math.floor(Math.random() * (this.heroes.length));
    this.heroeBorrado = this.heroes[nroRnd];
    this.heroes.splice(nroRnd, 1);
  }
}
