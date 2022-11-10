import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'matches',
        pathMatch: 'full',
      },
      {
        path: 'matches',
        loadChildren: () =>
          import('./matches/matches.module').then((m) => m.MatchesModule),
      },
      {
        path: 'ranking',
        loadChildren: () =>
          import('./ranking/ranking.module').then((m) => m.RankingModule),
      },
      {
        path: 'results',
        loadChildren: () =>
          import('./results/results.module').then((m) => m.ResultsModule),
      },
      {
        path: 'logs',
        loadChildren: () =>
          import('./logs/logs.module').then((m) => m.LogsModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
