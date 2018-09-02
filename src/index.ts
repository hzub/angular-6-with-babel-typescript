import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));

