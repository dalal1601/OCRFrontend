import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UploadComponent } from './upload/upload.component';
import { OcrResultComponent } from './ocr-result/ocr-result.component';
import {LoginComponent} from './login/login.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {cardGuard} from './card.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Default route to 'login'
  { path: 'upload', component: UploadComponent, canActivate : [cardGuard] },       // Route for UploadComponent
  { path: 'results', component: OcrResultComponent },   // Route for OCR results
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent } ,         // Route for LoginComponent
  { path: 'ocr-result', component: OcrResultComponent }

];
/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
--------------------
or
import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

export const routes: Routes = [
  {
    path: 'upload',
    loadComponent: () => import('./upload/upload.component').then(m => m.UploadComponent)
  },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  }
];

* */

