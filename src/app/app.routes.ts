import { Routes } from '@angular/router';

export const routes: Routes = [
	{
	    path: '',
	    loadComponent: () =>
	      import('./pages/aboutme/aboutme.component').then((m) => m.AboutmeComponent),
	    pathMatch: 'full',
	},
	{
	    path: 'resume',
	    loadComponent: () =>
	      import('./pages/resume/resume.component').then((m) => m.ResumeComponent),	    
	},
	{
	    path: 'contact',
	    loadComponent: () =>
	      import('./pages/contact/contact.component').then((m) => m.ContactComponent)
	},
];