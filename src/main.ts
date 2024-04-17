import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1Ijoic3B5a3VnIiwiYSI6ImNsdW5heDltajFsaDIybWxob2lzdHkxNzAifQ.mH8ANOGY22b6flamgHKB0w';

if ( !navigator.geolocation ){
  alert('Navegador no soporta el Geolocation');
  throw new Error('Navegador no soporta el Geolocation');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
