import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-filmes-card',
  templateUrl: './filmes-card.component.html',
  styleUrls: ['./filmes-card.component.css']
})
export class FilmesCardComponent {

  @Input() filme: Filme;
  @Output() apaga = new EventEmitter<object>();

  constructor() { }

  apagaCard(): void {
   this.apaga.emit(this.filme); 
  }

}
