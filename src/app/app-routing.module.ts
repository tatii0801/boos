import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { Page1Component } from './components/page1/page1.component';

const routes: Routes = [
  { path: 'Page1', component: Page1Component },
  { path: 'Page-a', component: PageAComponent },
  { path: 'Page-b', component: PageBComponent },
  { path: 'Page-c', component: PageCComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
 
  { path: '**', pathMatch:'full',redirectTo:'Page-a' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
