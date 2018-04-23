import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmesCardComponent } from './filmes-card/filmes-card.component';

import { FilmeService } from './filme.service';
import { HttpClientModule } from '@angular/common/http';
import { FormPesquisaComponent } from './lista-filmes/form-pesquisa/form-pesquisa.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ListaFilmesComponent, 
    FilmesCardComponent, FormPesquisaComponent],
  exports:[
    ListaFilmesComponent
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }
