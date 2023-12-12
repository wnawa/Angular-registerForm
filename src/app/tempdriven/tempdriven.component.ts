import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tempdriven',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tempdriven.component.html',
  styleUrl: './tempdriven.component.css'
})
export class TempdrivenComponent {
 
    firstName=''
    lastName=''
    
}
