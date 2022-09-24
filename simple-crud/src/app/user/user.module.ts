import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserService } from './pages/user-profile/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [UserFormComponent, UserProfileComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  providers: [UserService],
  exports: [UserProfileComponent],
})
export class UserModule { }
