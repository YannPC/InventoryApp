import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-button-modal',
  imports: [
    NgIf,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  standalone: true,

  templateUrl: './header-button-modal.html',
  styleUrl: './header-button-modal.scss',
})
export class HeaderButtonModal {
  /** 'sign-in' | 'register' (could also be an enum) */
  @Input() mode!: 'sign-in' | 'register';
  //control visibility yourself or via a service
  visible = false;
  open() {
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
  onSubmit(formValues: any) {
    if (this.mode === 'sign-in') {
      // call authService.signIn(...)
    } else {
      // call authService.register(...)
    }
    this.close();
  }
}
