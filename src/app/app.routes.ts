import { Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'documents', component: DocumentsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'links', component: LinksComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'suggestions', component: SuggestionsComponent},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];
