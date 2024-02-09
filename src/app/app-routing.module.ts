import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenfComponent } from './drivenf/drivenf.component';

const routes: Routes = [
  { path: '', redirectTo: '/drivenf', pathMatch: 'full' },
  { path: 'drivenf', component: DrivenfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
