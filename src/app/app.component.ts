import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TempdrivenComponent } from './tempdriven/tempdriven.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RegisterFormComponent,TempdrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'registerForm';
}
