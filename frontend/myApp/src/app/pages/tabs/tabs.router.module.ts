import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoginGuard } from 'src/app/guard/login.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'login',
        children:
        [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule',

          }
        ]
      },
      {
        path: 'list',
        canActivate: [LoginGuard],
        children:
        [
          {
            path: '',
            loadChildren: '../list/list.module#ListPageModule',

          }
        ]
      },
      {
        path: 'expense-details',
        children:
        [
          {
            path: '',
            loadChildren: '../expense-details/expense-details.module#ExpenseDetailsPageModule',

          }
        ]
      },
      {
        path: 'parameters',
        canActivate: [LoginGuard],
        children:
        [
          {
            path: '',
            loadChildren: '../parameters/parameters.module#ParametersPageModule',

          }
        ]
      },
      {
        path: 'missions',
        children:
        [
          {
            path: '',
            loadChildren: '../missions/missions.module#MissionsPageModule',

          }
        ]
      },
      {
        path: 'password',
        children:
        [
          {
            path: '',
            loadChildren: '../password/password.module#PasswordPageModule',

          }
        ]
      },
      {
        path: 'mission-details',
        children:
        [
          {
            path: '',
            loadChildren: '../mission-details/mission-details.module#MissionDetailsPageModule',

          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
