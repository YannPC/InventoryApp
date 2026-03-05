import { NgSwitch } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-button-modal',
  imports: [FormsModule, NgSwitch],
  standalone: true,

  templateUrl: './header-button-modal.html',
  styleUrl: './header-button-modal.scss',
})
export class HeaderButtonModal {
  /** 'sign-in' | 'register' (could also be an enum) */
  @Input() mode!: 'sign-in' | 'register';

  // control visibility yourself or via a service
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
