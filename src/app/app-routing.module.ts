import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SearchComponent },
  { path: 'history', component: SearchHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
