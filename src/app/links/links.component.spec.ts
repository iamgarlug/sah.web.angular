import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a link to LinkedIn', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    const hrefs = Array.from(links).map(a => a.getAttribute('href'));
    expect(hrefs).toContain('https://www.linkedin.com/in/shumburg/');
  });

  it('should render a link to GitHub profile', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    const hrefs = Array.from(links).map(a => a.getAttribute('href'));
    expect(hrefs).toContain('https://github.com/iamgarlug?tab=repositories');
  });

  it('should render a link to this site\'s source code', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    const hrefs = Array.from(links).map(a => a.getAttribute('href'));
    expect(hrefs).toContain('https://github.com/iamgarlug/sah.web.angular');
  });

  it('should open all links in a new tab', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    links.forEach(link => expect(link.getAttribute('target')).toBe('_blank'));
  });
});
