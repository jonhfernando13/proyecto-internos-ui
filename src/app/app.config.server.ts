import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
//import { provideServerRendering } from '@angular/platform-server';
import { provideServerRendering } from '@angular/ssr'; // 👈 Agrega esto si usas Angular 19+
import { provideRouter } from '@angular/router';
import { appConfig } from './app.config';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);