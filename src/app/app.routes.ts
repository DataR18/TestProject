import { Routes } from '@angular/router';
import { ContactusComponent } from './components/article/contactus/contactus.component';
import { contactInfoAdapter } from './core/state/reducers';
import { conatctInfoResolver } from './core/state/resolvers/contactinfo.resolver';
import { articlesResolver } from './core/state/resolvers/articles.resolver';
import { HomeComponent } from './components/shared/home/home.component';
import { BusinessComponent } from './components/company/business/business.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'article',
        component: ContactusComponent,
        resolve: {
            contactInfo: conatctInfoResolver, 
            articles: articlesResolver
        }
    },
    {
        path:'business',
        component: BusinessComponent,
        resolve: {
            contactInfo: conatctInfoResolver
        }
    }
];
