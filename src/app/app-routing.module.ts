import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './widgets/home/home.component';
import { AlbumsComponent } from './widgets/albums/albums.component';

const routes: Routes = [{path: '', component: HomeComponent ,
children: [
  {path: 'albums', component: AlbumsComponent, data: {url : '', name: '', c: '', id: ''}},
]}, { path: '', redirectTo: '/', pathMatch: 'full'},
{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
