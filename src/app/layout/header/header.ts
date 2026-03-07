import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderButtonModal } from '../../shared/components/header-button-modal/header-button-modal';

@Component({
  selector: 'app-header',
  imports: [HeaderButtonModal],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() toggleSideBar = new EventEmitter<void>();
}
