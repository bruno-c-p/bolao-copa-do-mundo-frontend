import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    ToastrModule,
    NgPipesModule,
    RouterModule.forChild([{ path: '', component: AdminComponent }]),
  ],
})
export class AdminModule {}
