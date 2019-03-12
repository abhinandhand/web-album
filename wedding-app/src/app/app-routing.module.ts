import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './widgets/home/home.component';

const routes: Routes = [{path: '', component: HomeComponent},
{ path: '', redirectTo: '/', pathMatch: 'full'},
{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled', scrollOffset: [0, 68]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
