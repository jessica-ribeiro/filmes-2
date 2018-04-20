import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmesCardComponent } from './filmes-card/filmes-card.component';
import { FilmeService } from './filme.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ListaFilmesComponent, 
    FilmesCardComponent],
  exports:[
    ListaFilmesComponent
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }
