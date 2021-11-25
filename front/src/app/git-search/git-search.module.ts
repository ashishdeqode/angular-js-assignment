import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitSearchRoutingModule } from './git-search-routing.module';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ShortNumberPipe } from '../pipes/short-number.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    RepoComponent,
    UserComponent,
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    GitSearchRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class GitSearchModule { }
