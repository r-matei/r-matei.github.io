import { Component, inject, OnInit, Renderer2, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ContactComponent } from './views/contact/contact.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, ExperienceComponent, ContactComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private renderer = inject(Renderer2);
  protected scrolledFragment = signal('about');
  public isDarkMode = signal(true);

  constructor() {}

  public ngOnInit(): void {
    this.route.fragment.subscribe(() => {
      (fragment: string | undefined) => {
        if (fragment) this.scrollToFragment(fragment);
      }
    })

    this.renderer.listen('window', 'scroll', (event) => {
      if (this.isVisible(document.getElementById('contact') as HTMLElement)) {
        this.scrolledFragment.set('contact');
      } else if (this.isVisible(document.getElementById('about') as HTMLElement)) {
        this.scrolledFragment.set('about');
      } else if (this.isVisible(document.getElementById('experience') as HTMLElement)) {
        this.scrolledFragment.set('experience');
      }
    });

    this.setupCustomCursor();
    this.setThemeClass();
  }

  private scrollToFragment(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  private isVisible(elem: HTMLElement): boolean {
    if (!(elem instanceof Element)) {
      throw Error('DomUtil: elem is not an element.');
    }

    const style = getComputedStyle(elem);

    if (style.display === 'none') {
      return false;
    }

    if (style.visibility !== 'visible') {
      return false;
    }

    if (+style.opacity < 0.1) {
      return false;
    }

    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      return false;
    }

    const elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
    };

    if (elemCenter.x < 0) {
      return false;
    }

    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) {
      return false;
    }

    if (elemCenter.y < 0) {
      return false;
    }

    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) {
      return false;
    }

    let pointContainer: any = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === elem) {
        return true;
      }
    } while ((pointContainer = pointContainer.parentNode));

    return false;
  }

  private setupCustomCursor(): void {
    const cursor = document.getElementById('cursor');

    if (!cursor) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      const mouseY = e.pageY;
      const mouseX = e.pageX;

      cursor.style.top = mouseY-500 + 'px';
      cursor.style.left = mouseX-500 + 'px';

      // cursor.style.backgroundColor = `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(136, 212, 152, 0.15), transparent 80%)`;
    }

    window.addEventListener('mousemove', moveCursor);
  }

  private setThemeClass(): void {
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
      return;
    }

    document.documentElement.classList.remove('dark');
  }
}
