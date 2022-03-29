import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'Test1', loadChildren: () => import('./test1/test1.module').then(m => m.Test1Module) }, { path: 'Test2', loadChildren: () => import('./test2/test2.module').then(m => m.Test2Module) }, { path: 'Test3', loadChildren: () => import('./test3/test3.module').then(m => m.Test3Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
