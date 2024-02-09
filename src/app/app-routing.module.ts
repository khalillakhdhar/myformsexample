import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenfComponent } from './drivenf/drivenf.component';
import { ExerciceComponent } from './exercice/exercice.component';

const routes: Routes = [
  { path: '', redirectTo: '/drivenf', pathMatch: 'full' },
  { path: 'drivenf', component: DrivenfComponent },
  { path: 'exercice', component: ExerciceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
