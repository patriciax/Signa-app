import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MostrarRecibosPage } from './mostrar-recibos.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarRecibosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MostrarRecibosPage]
})
export class MostrarRecibosPageModule {}
