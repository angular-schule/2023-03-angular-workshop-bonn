import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




class Test {

  constructor(zahl: number) {
    console.error('Hallo Welt!! 😀', zahl)
  }

  public blubb() { }
}


const test = new Test(42);
test.blubb();
