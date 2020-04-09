import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  { path: 'books', component: PreviewComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'detail/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
