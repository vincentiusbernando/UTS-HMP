import { TambahDraftPageModule } from './../tambah-draft/tambah-draft.module';
import { DraftPageModule } from './../draft/draft.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'tambah',
        loadChildren: () => import('../tambah/tambah.module').then(m => m.TambahPageModule)
      },
      {
        path: 'draft',
        loadChildren: () => import('../draft/draft.module').then(m => m.DraftPageModule)
      },
      {
        path: 'tambah_draft',
        loadChildren: () => import('../tambah-draft/tambah-draft.module').then(m => m.TambahDraftPageModule)
      },
      {
        path: 'detail/:index',
        loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
