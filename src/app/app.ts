import { Component, signal } from '@angular/core';
import { MainLayout } from './layout/main-layout/main-layout';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MainLayout],
})
export class App {
  protected readonly title = signal('InventoryApp');
}
