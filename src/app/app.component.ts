import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleDeferComponent } from './components/example-defer/example-defer.component';
import { PrefetchComponent } from './components/prefetch/prefetch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ExampleDeferComponent,
    PrefetchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-project';
}
