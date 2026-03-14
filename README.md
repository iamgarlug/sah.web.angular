# Stephen Humburg — Portfolio Website

A personal portfolio website built with Angular 21 and Angular Material. The site serves as both a professional portfolio — hosting my resume, cover letter, links, and contact form — and a _simple_ live demonstration of my front-end development skills.

## Live Site

[https://YOUR-DEPLOYED-URL-HERE](#)

## Built With

**Production**
- [Angular 21](https://angular.dev/)
- [Angular Material 21](https://material.angular.io/)
- TypeScript 5.9.3

**Development**
- Angular CLI 21.2.2
- [Vitest](https://vitest.dev/) (unit testing)
- [Claude Code](https://claude.ai/) (AI-assisted development)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Building

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## Environment Configuration (not committed)

This project uses Angular's environment file pattern. Copy and configure the environment files before building:

```
src/environments/environment.ts        ← development
src/environments/environment.prod.ts   ← production
```

See `src/environments/environment.ts` for the required keys.

## Running unit tests

```bash
ng test
```
