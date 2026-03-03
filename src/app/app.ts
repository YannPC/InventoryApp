import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { Footer } from './layout/footer/footer';
import { MainLayout } from './layout/main-layout/main-layout';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Sidebar, Footer, MainLayout],
})
export class App {
  protected readonly title = signal('InventoryApp');
}
