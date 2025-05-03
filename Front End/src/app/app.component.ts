import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
    this.setDefaultMetaTags();
  }

  private setDefaultMetaTags() {
    this.titleService.setTitle('Eric Preston - Personal Website');
    
    this.metaService.addTags([
      { name: 'description', content: 'Personal website of Eric Preston showcasing projects, skills, and professional experience' },
      { name: 'keywords', content: 'Eric Preston, portfolio, developer, software engineer, personal website' },
      { name: 'author', content: 'Eric Preston' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Eric Preston - Personal Website' },
      { property: 'og:description', content: 'Personal website of Eric Preston showcasing projects, skills, and professional experience' },
      { property: 'og:image', content: 'assets/Cypherpunk_zero_3960.png' },
      { property: 'og:url', content: 'https://ericpreston.com/' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
