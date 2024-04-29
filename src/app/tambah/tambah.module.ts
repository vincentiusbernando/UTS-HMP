import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahPageRoutingModule } from './tambah-routing.module';

import { TambahPage } from './tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahPageRoutingModule
  ],
  declarations: [TambahPage]
})
export class TambahPageModule {}
