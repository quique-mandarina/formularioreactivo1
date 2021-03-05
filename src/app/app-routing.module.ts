import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesModule} from "./pages/pages.module";


const routes: Routes = [
  { path: 'pages', component: PagesModule, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
