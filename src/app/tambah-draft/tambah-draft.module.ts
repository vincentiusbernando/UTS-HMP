import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahDraftPageRoutingModule } from './tambah-draft-routing.module';

import { TambahDraftPage } from './tambah-draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahDraftPageRoutingModule
  ],
  declarations: [TambahDraftPage]
})
export class TambahDraftPageModule {}
