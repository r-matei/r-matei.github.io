import { AfterViewInit, Component, Inject, inject, OnInit, Renderer2, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ContactComponent } from './views/contact/contact.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { EducationComponent } from "./views/education/education.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, ExperienceComponent, ContactComponent, CommonModule, EducationComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  private route = inject(ActivatedRoute);
  private renderer = inject(Renderer2);
  protected scrolledFragment = signal('about');
  public isDarkMode = signal<boolean | null>(null);

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage?.getItem('isDarkMode')) {
      this.isDarkMode.set(JSON.parse(localStorage.getItem('isDarkMode')!));
    } else {
      this.isDarkMode.set(true);
    }
  }

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
      } else if (this.isVisible(document.getElementById('education') as HTMLElement)) {
        this.scrolledFragment.set('education');
      } else if (this.isVisible(document.getElementById('experience') as HTMLElement)) {
        this.scrolledFragment.set('experience');
      }
    });
  }

  public ngAfterViewInit(): void {
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
    } while ((pointContainer = pointContainer?.parentNode));

    return false;
  }

  private setThemeClass(): void {
    if (this.isDarkMode()) {
      this.document.documentElement.classList.add('dark');
      return;
    }

    this.document.documentElement.classList.remove('dark');
  }
}
