import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import mermaid from 'mermaid';

vi.mock('mermaid', () => ({
  default: {
    initialize: vi.fn(),
    run: vi.fn()
  }
}));

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize mermaid with neutral theme on init', () => {
    expect(mermaid.initialize).toHaveBeenCalledWith({ startOnLoad: false, theme: 'neutral' });
  });

  it('should run mermaid on the .mermaid element', () => {
    expect(mermaid.run).toHaveBeenCalledWith({ querySelector: '.mermaid' });
  });

  it('should render the mermaid diagram element', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.mermaid')).toBeTruthy();
  });

  it('should display intro paragraph', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Stephen Humburg');
  });

  it('should display CI/CD pipeline paragraph', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('CI/CD deployment pipeline');
  });
});
