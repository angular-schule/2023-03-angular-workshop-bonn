import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




class Test {

  zahl: number;

  constructor(zahl: number) {
    // this.zahl = zahl;
    console.error('Hallo Welt!! 😀', this.zahl)
  }

  public blubb() { }
}


const test = new Test(42);
test.blubb();
