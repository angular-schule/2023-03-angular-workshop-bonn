import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Test } from './test';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



const test = new Test(42);
test.blubb();
