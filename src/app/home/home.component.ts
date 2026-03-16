import { Component, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import mermaid from 'mermaid';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    mermaid.initialize({ startOnLoad: false, theme: 'neutral' });
    mermaid.run({ querySelector: '.mermaid' });
  }
}
