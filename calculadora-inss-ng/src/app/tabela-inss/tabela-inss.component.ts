import { Component, OnInit } from '@angular/core';
import { TabelaInssService, Faixa } from './tabela-inss.service';

@Component({
  selector: 'app-tabela-inss',
  templateUrl: './tabela-inss.component.html',
  styleUrls: ['./tabela-inss.component.sass']
})
export class TabelaInssComponent implements OnInit {

  faixasNovas: Faixa[];

  constructor(private tabelaINSSService: TabelaInssService) { }

  ngOnInit(): void {
    this.tabelaINSSService.getFaixas().subscribe((data) => {
      this.faixasNovas = data;
    });
  }

}
