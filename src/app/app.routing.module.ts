import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routing';
import { ScenesModule } from './scenes/scenes.module';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    ScenesModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
