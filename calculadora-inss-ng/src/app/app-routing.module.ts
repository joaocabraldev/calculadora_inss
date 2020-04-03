import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraInssComponent } from './calculadora-inss/calculadora-inss.component';
import { TabelaInssComponent } from './tabela-inss/tabela-inss.component';


const routes: Routes = [
  { path: '', component: CalculadoraInssComponent },
  { path: 'tabela-inss', component: TabelaInssComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
