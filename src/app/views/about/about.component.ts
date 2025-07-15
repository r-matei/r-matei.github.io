import { Component, effect, ElementRef, viewChildren } from '@angular/core';
import { darkMode } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
    darkMode = darkMode();
    subTexts = viewChildren<ElementRef>('subText');

    constructor() {
      effect(() => {
        let opacityClass = 'opacity-80';

        if (this.darkMode()) {
          opacityClass = 'opacity-60';
        }

        this.subTexts().map(element => element.nativeElement.setAttribute('class', opacityClass));
      })
    }
}
