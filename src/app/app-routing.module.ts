import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    'path': '',
    'component': HomeComponent
  },
  {
    'path': 'timeline',
    'component': TimelineComponent
  },
  {
    'path': 'upload',
    'component': UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
