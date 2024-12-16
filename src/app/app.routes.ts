import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UploadComponent } from './upload/upload.component';
import { OcrResultComponent } from './ocr-result/ocr-result.component';
import {LoginComponent} from './login/login.component';
export const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'results', component: OcrResultComponent },
  { path: 'login', component: LoginComponent }

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

