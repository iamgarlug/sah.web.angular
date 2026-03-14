import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let breakpointSubject: Subject<BreakpointState>;

  beforeEach(async () => {
    breakpointSubject = new Subject<BreakpointState>();
    const breakpointObserverMock = { observe: () => breakpointSubject.asObservable() };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        provideAnimationsAsync('noop'),
        { provide: BreakpointObserver, useValue: breakpointObserverMock },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the "Stephen Humburg" title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Stephen Humburg');
  });

  it('should default isMobile to false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isMobile).toBe(false);
  });

  it('should render the name in the toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-toolbar')?.textContent).toContain('Stephen Humburg');
  });

  it('should close the sidenav and set isMobile when screen is small', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    breakpointSubject.next({ matches: true } as BreakpointState);
    expect(app.isMobile).toBe(true);
    expect(app.sidenav.opened).toBe(false);
  });

  it('should open the sidenav and clear isMobile when screen is wide', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    breakpointSubject.next({ matches: false } as BreakpointState);
    expect(app.isMobile).toBe(false);
    expect(app.sidenav.opened).toBe(true);
  });

  it('should toggle the sidenav when toggleMenu is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    breakpointSubject.next({ matches: false } as BreakpointState);
    expect(app.sidenav.opened).toBe(true);
    app.toggleMenu();
    expect(app.sidenav.opened).toBe(false);
    app.toggleMenu();
    expect(app.sidenav.opened).toBe(true);
  });
});
