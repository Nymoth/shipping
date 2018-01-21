import { ListComponent } from './scenes/list/list.component';

export const routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
