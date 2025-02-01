import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ApplicationEffectsArray } from './core/state/effects';
import { provideHttpClient } from '@angular/common/http';

import {  appReducers } from './core/state/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const effects = [... ApplicationEffectsArray]

export const appConfig: ApplicationConfig = {

  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()), provideStore(),
    provideStore(appReducers),
    provideEffects(effects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideAnimationsAsync()
]
};
